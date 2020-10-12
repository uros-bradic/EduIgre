import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { render } from "react-dom";
import { mount, route } from "navi";
import { Router, View } from "react-navi";

import App from "./App";
import { ForestPage } from "./components/ForestAndSea/ForestPage";
import { HouseAndGardenPage } from "./components/HouseAndGarden/HouseAndGardenPage";
import { SchoolPage } from "./components/School/ShoolPage";

const routes = mount({
  "/": route({
    title: "Home",
    view: <App />
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
  })
});
ReactDOM.render(
  <Router routes={routes}>
    <Suspense fallback={null}>
      <View />
    </Suspense>
  </Router>,
  document.getElementById("root")
);
// const rootElement = document.getElementById("root");
// render(<App />, rootElement);
