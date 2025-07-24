import {
  getPostById,
  getPosts,
  getPublicPost,
  getPublicPostBySlug,
  postPost,
  updatePost,
} from "@/api-call/post";
import { useAtom } from "jotai/react";
import { directusTokenAtom, tokenAtom } from "@/store/token";
import type { IPost, IPostRequest } from "@/type/post";
import { showToast } from "@/components/toaster";
import { useEffect, useState } from "react";

export const useGetPosts = (
  status: "published" | "draft" = "published",
  title: string,
  createdBy: boolean,
  userId: string,
  token: string
) => {
  // const [token] = useAtom(tokenAtom);
  const [posts, setPosts] = useState<IPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [tokenStorage] = useAtom(directusTokenAtom);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPosts(
          status,
          token ?? tokenStorage,
          title,
          createdBy,
          userId
        );
        setPosts(data ?? []);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [status, title, createdBy, userId]);

  return { posts, loading, error };
};

export const useGetPublicPosts = (
  status: "published" | "draft" = "published",
  title: string,
  createdBy: boolean,
  userId: string
) => {
  const [publicPosts, setPublicPosts] = useState<IPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const posts = await getPublicPost(status, title, createdBy, userId);
        setPublicPosts(posts ?? []);
      } catch (err) {
        setError(err as Error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [status, title, createdBy, userId]);

  return { publicPosts, isLoading, error };
};

export const useGetPublicPostBySlug = (slug: string) => {
  const [publicPost, setPublicPost] = useState<IPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!slug) return;

    const fetchPost = async () => {
      try {
        const data = await getPublicPostBySlug(slug);
        setPublicPost(data ?? null);
      } catch (err) {
        setError(err as Error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  return { publicPost, isLoading, error };
};

export const useGetPostById = (postId: string) => {
  const [postById, setPostById] = useState<IPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [token] = useAtom(tokenAtom);

  useEffect(() => {
    if (!postId || !token.access_token) return;

    const fetchPost = async () => {
      try {
        const data = await getPostById(postId, token.access_token ?? "");
        setPostById(data ?? null);
      } catch (err) {
        setError(err as Error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPost();
  }, [postId, token.access_token]);

  return { postById, isLoading, error };
};

export const useSubmitPosts = () => {
  const [token] = useAtom(directusTokenAtom);

  const submitPost = async (body: IPostRequest, postId: string) => {
    try {
      if (!token) {
        showToast("Session Expired", "No access token available", "error");
        throw new Error("No access token available");
      }

      if (postId === "new") {
        await postPost(body, token);
      } else {
        await updatePost(body, token, postId);
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  return { submitPost };
};
