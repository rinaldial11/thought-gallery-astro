import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import type { ILoginReq } from "@/type/login-request";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "@/schema-validation/login-schema";
import { showToast } from "./toaster";
import { useEffect } from "react";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginReq>({
    resolver: yupResolver(loginSchema),
  });
  // const [, setUser] = useAtom(userAtom);
  const onSubmit = async (data: ILoginReq) => {
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        body: new URLSearchParams(Object.entries(data)),
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      if (!res.ok) {
        showToast("Login Gagal", "Email atau password salah", "error");
        return;
      }

      showToast(
        "Login Berhasil",
        "Anda akan dialihkan ke halaman berikutnya",
        "success"
      );
      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 500);
    } catch (error) {
      showToast("Login Gagal", "Email atau password salah", "error");
    }
  };

  useEffect(() => {
    localStorage.clear();
  }, []);

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="pb-12">
        <div className="flex flex-col items-center justify-center gap-4">
          {/* <img src={tgIcon.src} alt="icon" className="w-40" /> */}
          <div className="flex gap-4 items-center">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
              <svg
                className="w-8 h-8 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-blue-600">MUGEN</h1>
              <p className="text-sm text-gray-600">INDONESIA</p>
            </div>
          </div>
          <CardTitle>Login to your account!</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </div>
        <CardContent>
          <form
            // action="/api/auth/login"
            onSubmit={handleSubmit(onSubmit)}
            method="POST"
            // onSubmit={handleSubmit(handleLogin)}
          >
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <div>
                  <Input
                    id="email"
                    {...register("email")}
                    name="email"
                    type="email"
                    placeholder="Enter your email..."
                  />
                  {errors.email && (
                    <p className="text-sm text-red-600 mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <div>
                  <Input
                    id="password"
                    {...register("password")}
                    name="password"
                    type="password"
                    placeholder="Enter your password..."
                  />
                  {errors.password && (
                    <p className="text-sm text-red-600 mt-1">
                      {errors.password.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <Button
                  // disabled={isLoading}
                  type="submit"
                  className="w-full bg-blue-600"
                >
                  {/* {isLoading ? "Logging in..." : "Login"} */}
                  Login
                </Button>
              </div>
              <a href="/" className="underline text-end text-sm">
                back to landing page?
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
