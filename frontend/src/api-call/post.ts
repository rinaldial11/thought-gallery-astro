import { showToast } from "@/components/toaster";
import { axiosInstance } from "@/lib/axios-instance";
import type { IPost, IPostRequest } from "@/type/post";

export const getPosts = async (
  status: "published" | "draft" = "published",
  token: string,
  title: string,
  createdBy: boolean,
  userId: string
) => {
  try {
    if (status === "draft") {
      const filter: Record<string, any> = {
        status: {
          _eq: "draft",
        },
      };

      if (title.trim().length > 0) {
        filter.title = { _contains: title };
      }

      if (createdBy) {
        filter.author = { _eq: userId };
      }

      const res = await axiosInstance.get(
        "/items/posts?fields=*,author.first_name,author.last_name,author.email",
        {
          params: {
            filter,
          },
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      return res.data?.data as IPost[];
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getPublicPost = async (
  status: "published" | "draft" = "published",
  title: string,
  createdBy: boolean,
  userId: string
) => {
  try {
    if (status === "published") {
      const filter: Record<string, any> = {
        status: {
          _eq: "published",
        },
      };

      if (title.trim().length > 0) {
        filter.title = { _contains: title };
      }

      if (createdBy) {
        filter.author = { _eq: userId };
      }

      const res = await axiosInstance.get(
        "/items/posts?fields=*,author.first_name,author.last_name,author.email",
        {
          params: {
            filter,
          },
        }
      );

      return res.data?.data as IPost[];
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
              _eq: "published",
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
