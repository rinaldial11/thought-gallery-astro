import { Toaster } from "sonner";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
// import { createBrowserRouter, RouterProvider } from "react-router";
// import DashboardPage from "./react-pages/dashboard";

// const router = createBrowserRouter([
//   {
//     path: "/dashboard",
//     element: <DashboardPage />,
//   },
// ]);

export function ReactRoot({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);
  return (
    <>
      {/* <RouterProvider router={router} /> */}
      {children}
      <Toaster position="top-center" />
    </>
  );
}
