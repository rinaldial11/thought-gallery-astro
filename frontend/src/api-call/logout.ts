import { axiosInstance } from "@/lib/axios-instance";
import type { IToken } from "../type/token";

export const logoutRequest = async (token: IToken) => {
  try {
    const res = await axiosInstance.post(
      "/auth/logout",
      {
        refresh_token: token.refresh_token,
      },
      {
        headers: {
          Authorization: `Bearer ${token.access_token}`,
        },
      }
    );

    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
