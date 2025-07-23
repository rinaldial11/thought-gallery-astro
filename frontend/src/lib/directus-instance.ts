import { DIRECTUS_URL } from "@/constants/url";
import type { IPost } from "@/type/post";
import { authentication, createDirectus, rest } from "@directus/sdk";

interface Global {
  title: string;
  description: string;
}

interface Author {
  name: string;
}

interface Page {
  title: string;
  content: string;
  slug: string;
}

type Schema = {
  posts: IPost[];
  global: Global;
  pages: Page[];
};

export const directus = createDirectus<Schema>(DIRECTUS_URL)
  .with(rest())
  .with(authentication("cookie", { credentials: "include" }));
