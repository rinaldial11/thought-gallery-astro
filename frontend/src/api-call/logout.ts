// import { axiosInstance } from "@/lib/axios-instance";
import { logout } from "@directus/sdk";
import type { IToken } from "../type/token";
import { directus } from "@/lib/directus-instance";

export const logoutRequest = async (token: IToken) => {
  try {
    // const res = await axiosInstance.post(
    //   "/auth/logout",
    //   {
    //     refresh_token: token.refresh_token,
    //   },
    //   {
    //     headers: {
    //       Authorization: `Bearer ${token.access_token}`,
    //     },
    //   }
    // );
    const res = await directus.request(
      logout({ refresh_token: token.refresh_token ?? "" })
    );

    return res;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
