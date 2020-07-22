import React from "react";

const HomeComponent = React.lazy(() => import("../modules/home"));
const Page1Component = React.lazy(() => import("../modules/page1"));
const Page2Component = React.lazy(() => import("../modules/page2"));

const routes = [
  { path: "/", exact: true, name: "Home", componet: HomeComponent },
  { path: "/page1", exact: true, name: "Page1", componet: Page1Component },
  { path: "/page2", exact: true, name: "Page2", componet: Page2Component },
];

export default routes;
