import type { IUser } from "@/type/user";
import { atomWithStorage } from "jotai/utils";

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
