export interface IAuthor {
  first_name: string;
  last_name: string;
  email: string;
}

export interface IPost {
  id?: string;
  status: "published" | "draft";
  author: IAuthor;
  created_at?: string; // ISO timestamp
  updated_at?: string | null;
  title: string;
  body: string;
  slug?: string;
  seo_title: string;
  seo_desc: string;
  version?: number;
}

export interface IPostRequest {
  id?: string;
  status: "published" | "draft";
  author: string;
  created_at?: string; // ISO timestamp
  updated_at?: string | null;
  title: string;
  body: string;
  slug?: string;
  seo_title: string;
  seo_desc: string;
  version?: number;
}
