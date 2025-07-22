import { axiosInstance } from "@/lib/axios-instance";
import type { IPost } from "@/type/post";

export const getPosts = async (
  status: "published" | "draft" = "published",
  token: string
) => {
  try {
    if (status === "draft") {
      const res = await axiosInstance.get("/items/posts", {
        params: {
          filter: {
            status: {
              _eq: "draft",
            },
          },
        },
        headers: { Authorization: `Bearer ${token}` },
      });

      return res.data?.data as IPost[];
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getPublicPost = async (
  status: "published" | "draft" = "published"
) => {
  try {
    if (status === "published") {
      const res = await axiosInstance.get("/items/posts", {
        params: {
          filter: {
            status: {
              _eq: "published",
            },
          },
        },
      });

      return res.data?.data as IPost[];
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getPublicPostBySlug = async (slug: string) => {
  try {
    const res = await axiosInstance.get("/items/posts", {
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
    });

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

export const postPost = async (body: IPost, token: string) => {
  try {
    await axiosInstance.post("/items/posts", body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const updatePost = async (
  body: IPost,
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
    console.log(error);
    throw error;
  }
};
