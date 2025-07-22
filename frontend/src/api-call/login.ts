import { axiosInstance } from "@/lib/axios-instance";
import type { ILoginReq } from "../type/login-request";
import type { IToken } from "@/type/token";
import { showToast } from "@/components/toaster";

export const loginRequest = async (body: ILoginReq) => {
  try {
    const res = await axiosInstance.post("/auth/login", body);

    showToast(
      "Login Success",
      "Kamu akan dialihkan ke halaman berikutnya",
      "success"
    );

    return res.data?.data as IToken;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
