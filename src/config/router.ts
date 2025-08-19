import { createBrowserRouter } from "react-router";

// Route components
import { HomePage } from "../routes/home";
import { AboutPage } from "../routes/about";
import { UsersPage } from "../routes/users";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/about",
    Component: AboutPage,
  },
  {
    path: "/users",
    Component: UsersPage,
  },
]);
