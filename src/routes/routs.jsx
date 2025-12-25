import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import LinkLayout from "../layouts/LinkLayout";
import SinglePage from "../pages/SinglePage";
import NotFoundPage from "../pages/NotFoundPage";

export const routes = [
  {
    element: <LinkLayout />,
    path: "/",
    children: [
      {
        element: <HomePage />,
        index: true,
      },
      {
        element: <SinglePage />,
        path: ":id",
      },
      {
        element: <AboutPage />,
        path: "about",
      },
      {
        element: <NotFoundPage />,
        path: "*",
      },
    ],
  },
];
