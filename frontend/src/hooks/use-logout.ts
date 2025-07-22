import { logoutRequest } from "@/api-call/logout";
import { useAtom } from "jotai/react";
import { tokenAtom } from "@/store/token";

export const useLogout = () => {
  const [token] = useAtom(tokenAtom);

  const logout = async () => {
    try {
      await logoutRequest(token);
    } catch (err) {
      console.warn("Failed to logout from server:", err);
    }

    localStorage.clear();
    window.location.href = "/login";
  };

  return { logout };
};
