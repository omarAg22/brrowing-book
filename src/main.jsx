import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Home from "./pages/Home.jsx";
import TrendingBook from "./pages/TrendingBook.jsx";
import NewReleases from "./pages/NewReleases.jsx";
import UpcomingBooks from "./pages/UpcomingBooks.jsx";
import FavoriteBooks from "./pages/FavoriteBooks.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/trending-books", element: <TrendingBook /> },
      { path: "/new-releases", element: <NewReleases /> },
      { path: "/upcoming-books", element: <UpcomingBooks /> },
      { path: "/favorite-books", element: <FavoriteBooks /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
