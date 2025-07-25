import { axiosInstance } from "@/lib/axios-instance";
// import { getRole } from "./role";
import type { DirectusUser, IUser } from "@/type/user";
import { directus } from "@/lib/directus-instance";
import { readMe } from "@directus/sdk";

// export const getUser = async (token: string) => {
//   try {
//     const res = await axiosInstance.get("/users/me", {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });

//     const rawUser = res.data.data;

//     const role = await getRole(token, rawUser?.role);

//     return {
//       id: rawUser.id,
//       email: rawUser.email,
//       first_name: rawUser.first_name,
//       last_name: rawUser.last_name,
//       role: {
//         id: role.id,
//         name: role.name,
//         admin_access: role.name === "Administrator",
//         app_access: true,
//       },
//     };
//   } catch (error) {
//     console.log(error);
//     throw error;
//   }
// };

export const getUser = async () => {
  try {
    const rawUser = await directus.request(readMe());

    // const role = await directus.request(
    //   readItem("roles", rawUser.role as string)
    // );

    return rawUser as DirectusUser;
  } catch (error) {
    console.error("Error in getUser:", error);
    throw error;
  }
};

export const getAllUsers = async (token: string) => {
  try {
    const res = await axiosInstance.get("/users", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res.data?.data as IUser[];
  } catch (error) {
    console.log(error);
    throw error;
  }
};
