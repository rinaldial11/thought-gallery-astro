import { loginRequest } from "@/api-call/login";
import { getUser } from "@/api-call/user";
import { showToast } from "@/components/toaster";
import { tokenAtom } from "@/store/token";
import { userAtom } from "@/store/user";
import type { ILoginReq } from "@/type/login-request";
import { useAtom } from "jotai/react";

export const useLoginRequest = () => {
  const [, setToken] = useAtom(tokenAtom);
  const [, setUser] = useAtom(userAtom);

  const loginSubmit = async (body: ILoginReq) => {
    try {
      const res = await loginRequest(body);

      setToken(res);

      try {
        const user = await getUser(res.access_token ?? "");
        setUser(user);
      } catch (error) {
        console.error("Failed to fetch user after login:", error);
      }

      window.location.href = "/dashboard";
    } catch (error) {
      showToast("Login Failed", "Email atau password salah", "error");
      console.log(error);
      throw error;
    }
  };

  return { loginSubmit };
};
