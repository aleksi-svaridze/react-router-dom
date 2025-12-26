import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import LinkLayout from "../layouts/LinkLayout";
import SinglePage from "../pages/SinglePage";
import NotFoundPage from "../pages/NotFoundPage";
import FactsPage from "../pages/FactsPage";
import ErrorPage from "../pages/ErrorPage";

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
        element: <AboutPage />,
        path: "about",
      },
      {
        element: <FactsPage />,
        path: "facts",
      },
      {
        element: <SinglePage />,
        errorElement: <ErrorPage />,
        path: "facts/:factTitle",
      },
      {
        element: <NotFoundPage />,
        path: "*",
      },
    ],
  },
];
