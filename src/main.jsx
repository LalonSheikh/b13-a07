import { Children, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./layout/Root.jsx";
import Timeline from "./pages/timeline/Timeline.jsx";
import Analytics from "./pages/analytics/Analytics.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
  children:[
    {
    path: "/timeline",
    element: <Timeline></Timeline>,
  },
  {
    path: "/stats",
    element: <Analytics></Analytics>,
  },]}
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
);
