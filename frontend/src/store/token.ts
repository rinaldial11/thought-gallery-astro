import type { IToken } from "@/type/token";
import { atomWithStorage } from "jotai/utils";

export const tokenAtom = atomWithStorage<IToken>("token", {
  access_token: "",
  expires: 0,
  refresh_token: "",
});
