import type { ILoginReq } from "../type/login-request";
import type { IToken } from "@/type/token";
import { showToast } from "@/components/toaster";
import { directus } from "@/lib/directus-instance";

export const loginRequest = async (body: ILoginReq) => {
  try {
    const res = await directus.login(body);

    showToast(
      "Login Success",
      "Kamu akan dialihkan ke halaman berikutnya",
      "success"
    );

    return {
      access_token: res.access_token,
      expires: res.expires,
      expires_at: res.expires_at,
      refresh_token: res.refresh_token,
    } as IToken;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
