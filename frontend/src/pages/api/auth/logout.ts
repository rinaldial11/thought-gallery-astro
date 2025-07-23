import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ cookies, redirect }) => {
  cookies.delete("directus_session_token", { path: "/" });
  return redirect("/login");
};
