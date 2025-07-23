import { useAtom } from "jotai";
import { tokenAtom } from "@/store/token";
import { directus } from "@/lib/directus-instance";
import { refresh } from "@directus/sdk";
import { useCallback, useEffect } from "react";

export function useRefreshToken() {
  const [token, setToken] = useAtom(tokenAtom);

  const refreshToken = useCallback(async () => {
    try {
      const result = await directus.request(
        refresh({ refresh_token: token?.refresh_token ?? "" })
      );
      await directus.setToken(result.access_token);
      setToken(result);
      return result;
    } catch (error) {
      console.error("Refresh token error:", error);
      throw error;
    }
  }, [token, setToken]);

  useEffect(() => {
    refreshToken();
  }, []);

  return { token };
}
