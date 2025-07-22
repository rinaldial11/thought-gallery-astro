import { Toaster } from "sonner";

export function ReactRoot({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Toaster position="top-center" />
    </>
  );
}
