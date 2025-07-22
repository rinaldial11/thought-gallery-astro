import { axiosInstance } from "@/lib/axios-instance";

export const getRole = async (token: string, roleId: string) => {
  try {
    const res = await axiosInstance.get(`/roles/${roleId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res.data?.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
