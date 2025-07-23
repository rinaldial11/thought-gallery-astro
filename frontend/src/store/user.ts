import type { IUser } from "@/type/user";
import { atomWithStorage } from "jotai/utils";
import type { DirectusUser } from "@/type/user";

export const userAtom = atomWithStorage<IUser>("user-info", {
  id: "",
  email: "",
  first_name: "",
  last_name: "",
  role: {
    id: "",
    name: "",
    admin_access: false,
    app_access: false,
  },
});

export const directuseUserAtom = atomWithStorage<DirectusUser>("user", {
  id: "",
  first_name: "",
  last_name: "",
  email: "",
  location: null,
  title: null,
  description: null,
  tags: null,
  avatar: null,
  language: "en-US",
  tfa_secret: null,
  status: "active",
  role: "",
  policies: null,
  last_access: null,
  last_page: null,
  auth_data: {},
  theme_light_overrides: {},
  theme_dark_overrides: {},
});
