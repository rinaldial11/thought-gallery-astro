import { Toaster } from "sonner";
// import { createBrowserRouter, RouterProvider } from "react-router";
// import DashboardPage from "./react-pages/dashboard";

// const router = createBrowserRouter([
//   {
//     path: "/dashboard",
//     element: <DashboardPage />,
//   },
// ]);

export function ReactRoot({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* <RouterProvider router={router} /> */}
      {children}
      <Toaster position="top-center" />
    </>
  );
}
