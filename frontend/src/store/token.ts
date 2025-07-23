import { type IToken } from "@/type/token";
import { atomWithStorage } from "jotai/utils";

export const tokenAtom = atomWithStorage<IToken>("token", {
  access_token: "",
  expires: 0,
  refresh_token: "",
});

export const directusTokenAtom = atomWithStorage<string>(
  "directus_session_token",
  ""
);
