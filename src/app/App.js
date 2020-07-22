import React from "react";
import "./index.css";
import "./App.css";
import Layout1 from "../layouts/layout1";
import Content from "../layouts/layout1/content";
import SideBar from "../layouts/layout1/sidebar";

function App() {
  return (
    <Layout1>
      <SideBar>asdfasdfasd</SideBar>
      <Content />
    </Layout1>
  );
}

export default App;
