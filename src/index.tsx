import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { mount, route } from "navi";
import { Router, View } from "react-navi";
import "./styles.css";

import { Layout } from "./components/Common/Layout";
import { HomePage } from "./components/HomePage/HomePage";
import { ForestPage } from "./components/ForestAndSea/ForestPage";
import { HouseAndGardenPage } from "./components/HouseAndGarden/HouseAndGardenPage";
import { SchoolPage } from "./components/School/ShoolPage";
import { ContactUsPage } from "./components/ContactUs/ContactUsPage";
import { AboutUsPage } from "./components/AboutUs/AboutUsPage";

const routes = mount({
  "/": route({
    title: "Home",
    view: <HomePage />
  }),
  "/forest": route({
    title: "Forest",
    view: <ForestPage />
  }),
  "/house": route({
    title: "House And Garden",
    view: <HouseAndGardenPage />
  }),
  "/school": route({
    title: "School",
    view: <SchoolPage />
  }),
  "/contact": route({
    title: "Contact us",
    view: <ContactUsPage />
  }),
  "/about": route({
    title: "About",
    view: <AboutUsPage />
  })
});
ReactDOM.render(
  <Router routes={routes}>
    <Layout>
      <Suspense fallback={null}>
        <View />
      </Suspense>
    </Layout>
  </Router>,
  document.getElementById("root")
);
