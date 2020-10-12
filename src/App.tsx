import * as React from "react";
import "./styles.css";
import { Header } from "./components/Header";
import { CategoryList } from "./components/HomePage/CategoryList";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="App">
      <Header />
      <CategoryList />
      <Footer />
    </div>
  );
}
