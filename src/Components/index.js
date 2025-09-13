import React from "react";

const Home = React.lazy(() => import("./Home"));
const ShortsPage = React.lazy(() => import("./ShortsPage"));
const SubscriptionPage = React.lazy(() => import("./SubscriptionPage"));
const DownloadsPage = React.lazy(() => import("./DownloadsPage"));
const YouPage = React.lazy(() => import("./YouPage"));

export { Home, ShortsPage, SubscriptionPage, DownloadsPage, YouPage };
