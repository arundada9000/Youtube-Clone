import React from "react";
import App from "./App"; // layout component
const Home = React.lazy(() => import("./Components/Home"));
const ShortsPage = React.lazy(() => import("./Components/ShortsPage"));
const SubscriptionPage = React.lazy(() =>
  import("./Components/SubscriptionPage")
);
const DownloadsPage = React.lazy(() => import("./Components/DownloadsPage"));
const YouPage = React.lazy(() => import("./Components/YouPage"));
const CreatePost = React.lazy(() => import("./Components/CreatePost"));

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "shorts", element: <ShortsPage /> },
      { path: "subscriptions", element: <SubscriptionPage /> },
      { path: "downloads", element: <DownloadsPage /> },
      { path: "you", element: <YouPage /> },
      { path: "create-post", element: <CreatePost /> },
    ],
  },
];

export default routes;
