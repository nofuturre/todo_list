import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { LoginPage } from "./pages/auth/login";
import { HomePage } from "./pages/home-page";
import { NextUIProvider } from "@nextui-org/react";
import { CreateAccountPage } from "./pages/auth/create-account";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "auth/login",
    element: <LoginPage />,
  },
  {
    path: "auth/create-account",
    element: <CreateAccountPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NextUIProvider>
      <RouterProvider router={router} />
    </NextUIProvider>
  </React.StrictMode>
);
