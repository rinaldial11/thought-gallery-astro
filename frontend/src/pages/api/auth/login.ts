import { directus } from "@/lib/directus-instance";
import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  const formData = await request.formData();
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();

  if (!email || !password) {
    return new Response("Email and password are required", { status: 400 });
  }
  try {
    const response = await directus.login({ email, password });
    if (response.access_token) {
      cookies.set("directus_session_token", response.access_token, {
        sameSite: "strict",
        path: "/",
        secure: true,
      });
    }
  } catch (error: any) {
    const message = error?.errors?.[0]?.message || "Login failed";
    return new Response(message, { status: 500 });
  }

  return redirect("/dashboard");
};
