import { showToast } from "@/components/toaster";
import { axiosInstance } from "@/lib/axios-instance";
import type { IPost, IPostRequest } from "@/type/post";

export const getPosts = async (
  status: "published" | "draft" = "published",
  token: string,
  title: string
) => {
  try {
    if (status === "draft") {
      if (title.length === 0) {
        const res = await axiosInstance.get(
          "/items/posts?fields=*,author.first_name,author.last_name,author.email",
          {
            params: {
              filter: {
                status: {
                  _eq: "draft",
                },
              },
            },
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        return res.data?.data as IPost[];
      } else {
        const res = await axiosInstance.get(
          "/items/posts?fields=*,author.first_name,author.last_name,author.email",
          {
            params: {
              filter: {
                status: {
                  _eq: "draft",
                },
                title: {
                  _contains: title,
                },
              },
            },
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        return res.data?.data as IPost[];
      }
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getPublicPost = async (
  status: "published" | "draft" = "published",
  title: string
) => {
  try {
    if (status === "published") {
      if (title.length === 0) {
        const res = await axiosInstance.get(
          "/items/posts?fields=*,author.first_name,author.last_name,author.email",
          {
            params: {
              filter: {
                status: {
                  _eq: "published",
                },
              },
            },
          }
        );

        return res.data?.data as IPost[];
      } else {
        const res = await axiosInstance.get(
          "/items/posts?fields=*,author.first_name,author.last_name,author.email",
          {
            params: {
              filter: {
                status: {
                  _eq: "published",
                },
                title: {
                  _contains: title,
                },
              },
            },
          }
        );

        return res.data?.data as IPost[];
      }
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getPublicPostBySlug = async (slug: string) => {
  try {
    const res = await axiosInstance.get(
      "/items/posts?fields=*,author.first_name,author.last_name,author.email",
      {
        params: {
          filter: {
            slug: {
              _eq: slug,
            },
            status: {
              _eq: "published", // hanya tampilkan post yang published
            },
          },
          limit: 1,
        },
      }
    );

    return res.data?.data[0] as IPost;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getPostById = async (posId: string, token: string) => {
  try {
    const res = await axiosInstance.get(`/items/posts/${posId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res.data?.data as IPost;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const postPost = async (body: IPostRequest, token: string) => {
  try {
    await axiosInstance.post("/items/posts", body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    showToast("Judul sudah ada", "Silahkan pakai judul lain", "error");
    console.log(error);
    throw error;
  }
};

export const updatePost = async (
  body: IPostRequest,
  token: string,
  postId: string
) => {
  try {
    await axiosInstance.patch(`/items/posts/${postId}`, body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    showToast("Judul sudah ada", "Silahkan pakai judul lain", "error");
    console.log(error);
    throw error;
  }
};
