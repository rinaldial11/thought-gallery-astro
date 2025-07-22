import { toast } from "sonner";
import { cn } from "@/lib/utils";
import {
  CheckCircle,
  XCircle,
  Info,
  AlertTriangle,
  Loader2,
  MessageSquare,
} from "lucide-react";

type ToastType =
  | "default"
  | "success"
  | "error"
  | "warning"
  | "info"
  | "loading";

const toastIcons: Record<ToastType, React.ReactNode> = {
  default: <MessageSquare className="w-5 h-5 text-inherit" />,
  success: <CheckCircle className="w-5 h-5 text-green-500" />,
  error: <XCircle className="w-5 h-5 text-red-500" />,
  warning: <AlertTriangle className="w-5 h-5 text-yellow-500" />,
  info: <Info className="w-5 h-5 text-blue-500" />,
  loading: <Loader2 className="w-5 h-5 animate-spin text-inherit" />,
};

export function showToast(
  title: string,
  message?: string,
  type: ToastType = "default"
) {
  toast.custom(
    (t) => (
      <div
        className={cn(
          "w-[360px] rounded-2xl px-4 py-3 cursor-pointer shadow-md",
          "border border-black/10 dark:border-white/10",
          "bg-white/60 dark:bg-zinc-900/70",
          "backdrop-blur-md backdrop-saturate-150",
          "text-black dark:text-white",
          "transition-colors duration-300",
          "animate-in fade-in slide-in-from-top-5"
        )}
        onClick={() => toast.dismiss(t)}
      >
        <div className="flex items-start gap-3">
          <div className="pt-0.5">{toastIcons[type]}</div>
          <div className="flex-1">
            <div className="font-semibold">{title}</div>
            {message && <div className="text-sm opacity-90">{message}</div>}
          </div>
        </div>
      </div>
    ),
    {
      duration: type === "loading" ? Infinity : 4000,
    }
  );
}
