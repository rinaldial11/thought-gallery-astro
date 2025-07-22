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
import tgIcon from "@/assets/icon/tg-icon.png";
// import { useLogin } from "../hooks/use-login";
import { useForm } from "react-hook-form";
import type { ILoginReq } from "@/type/login-request";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const { register } = useForm<ILoginReq>();
  // const { mutate, isPending } = useLogin();

  // const handleLogin = (loginForm: ILoginReq) => {
  //   mutate(loginForm);
  // };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="pb-12">
        <div className="flex flex-col items-center gap-2">
          <img src={tgIcon.src} alt="icon" className="w-40" />
          <CardTitle>Login to your thought gallery!</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </div>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  {...register("email")}
                  type="email"
                  placeholder="Enter your email..."
                  required
                />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input
                  id="password"
                  {...register("password")}
                  type="password"
                  placeholder="Enter your password..."
                  required
                />
              </div>
              <div className="flex flex-col gap-3">
                <Button type="submit" className="w-full">
                  Login
                  {/* {isPending ? "Logging in..." : "Login"} */}
                </Button>
              </div>
              <a href="/dashboard" className="underline text-end text-sm">
                back to landing page?
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
