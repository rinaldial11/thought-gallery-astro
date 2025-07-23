import { getUser } from "@/api-call/user";
import { showToast } from "@/components/toaster";
import { axiosInstance } from "@/lib/axios-instance";
import { tokenAtom } from "@/store/token";
import { userAtom } from "@/store/user";
import type { ILoginReq } from "@/type/login-request";
import { useAtom } from "jotai/react";
import { useState } from "react";
// import { useNavigate } from "react-router";

export const useLoginRequest = () => {
  const [, setToken] = useAtom(tokenAtom);
  const [, setUser] = useAtom(userAtom);
  const [isLoading, setIsLoading] = useState(false);
  // const navigate = useNavigate();

  const loginSubmit = async (body: ILoginReq) => {
    setIsLoading(true);
    const form = new FormData();
    form.append("email", body.email);
    form.append("password", body.password);
    try {
      const res = await axiosInstance.post(
        "http://localhost:4321/api/auth/login",
        form
      );

      setToken({
        access_token: res.data.access_token,
        expires: res.data.expires,
        expires_at: res.data.expires_at,
        refresh_token: res.data.refresh_token,
      });

      try {
        const user = await getUser(res.data.access_token ?? "");
        setUser(user);
      } catch (error) {
        console.error("Failed to fetch user after login:", error);
      }

      // navigate("/dashboard");
      // window.location.href = "/dashboard";
    } catch (error) {
      showToast("Login Failed", "Email atau password salah", "error");
      console.log(error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return { loginSubmit, isLoading };
};

// export const useLoginRequest = () => {
//   const [, setToken] = useAtom(tokenAtom);
//   const [, setUser] = useAtom(userAtom);
//   const [isLoading, setIsLoading] = useState(false);
//   // const navigate = useNavigate();

//   const loginSubmit = async (body: ILoginReq) => {
//     setIsLoading(true);
//     try {
//       const res = await loginRequest(body);

//       setToken({
//         access_token: res.access_token,
//         expires: res.expires,
//         expires_at: res.expires_at,
//         refresh_token: res.refresh_token,
//       });

//       try {
//         const user = await getUser(res.access_token ?? "");
//         setUser(user);
//       } catch (error) {
//         console.error("Failed to fetch user after login:", error);
//       }

//       // navigate("/dashboard");
//       window.location.href = "/dashboard";
//     } catch (error) {
//       showToast("Login Failed", "Email atau password salah", "error");
//       console.log(error);
//       throw error;
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return { loginSubmit, isLoading };
// };
