import { axiosInstance } from "@/lib/axios-instance";
import type { ILoginReq } from "../type/login-request";

export const loginRequest = async (body: ILoginReq) => {
  try {
    const res = await axiosInstance.post("/auth/login", body);

    return res.data?.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
