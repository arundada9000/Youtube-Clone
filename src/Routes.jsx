import React from "react";
import App from "./App";
import CreatePostLayout from "./Components/CreatePostLayout";
const Home = React.lazy(() => import("./Components/Home"));
const ShortsPage = React.lazy(() => import("./Components/ShortsPage"));
const SubscriptionPage = React.lazy(() =>
  import("./Components/SubscriptionPage")
);
const DownloadsPage = React.lazy(() => import("./Components/DownloadsPage"));
const YouPage = React.lazy(() => import("./Components/YouPage"));
const ScheduledPost = React.lazy(() => import("./Components/ScheduledPost"));
const ArchivedPost = React.lazy(() => import("./Components/ArchivedPost"));
const PublishedPost = React.lazy(() => import("./Components/PublishedPost"));
const PageNotFound = React.lazy(() => import("./Components/PageNotFound"));

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
    ],
  },
  {
    path: "create-post",
    element: <CreatePostLayout />,
    children: [
      { path: "", element: <PublishedPost /> },
      { path: "scheduled-post", element: <ScheduledPost /> },
      { path: "archived-post", element: <ArchivedPost /> },
    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
];

export default routes;
