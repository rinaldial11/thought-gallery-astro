export interface IUser {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  role: {
    id: string;
    name: string;
    admin_access: boolean;
    app_access: boolean;
  };
}

export interface DirectusUser {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  location: string | null;
  title: string | null;
  description: string | null;
  tags: string | null;
  avatar: string | null;
  language: string;
  tfa_secret: string | null;
  status: "active" | "suspended" | "invited" | "deleted";
  role: string; // Bisa diganti jadi objek jika pakai expand
  policies: string | null;
  last_access: string | null;
  last_page: string | null;
  auth_data: Record<string, unknown>;
  theme_light_overrides: Record<string, unknown>;
  theme_dark_overrides: Record<string, unknown>;
}
