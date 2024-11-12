import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Landing } from "./routes/landing";
import { Login } from "./routes/login";
import { SignUp } from "./routes/signup";
import { AuthLayout } from "./layouts/auth-layout";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./contexts/auth-context";
import { Redirect } from "./routes/redirect";
import { Home } from "./routes/home";
import { DashboardLayout } from "./layouts/dashboard-layout";
import { Courses } from "./routes/courses";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Redirect>
        <Landing />
      </Redirect>
    ),
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: (
          <Redirect>
            <Login />
          </Redirect>
        ),
      },
      {
        path: "/signup",
        element: (
          <Redirect>
            <SignUp />
          </Redirect>
        ),
      },
    ],
  },
  {
    element: <DashboardLayout />,
    children: [
      {
        path: "/home",
        element: (
          <Redirect>
            <Home />
          </Redirect>
        ),
      },
      {
        path: "/courses",
        element: (
          <Redirect>
            <Courses />
          </Redirect>
        ),
      },
    ],
  },
  {
    path: "*",
    element: (
      <Redirect>
        <p>Not Found</p>
      </Redirect>
    ),
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Toaster />
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
);
