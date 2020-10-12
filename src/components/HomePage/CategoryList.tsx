import React from "react";
import { Category } from "./Category";
import { Categories } from "./Categories";

export function CategoryList() {
  const CategoryList = Categories.map((category, i) => (
    <Category {...category} key={i} />
  ));
  return <div className="categories">{CategoryList}</div>;
}
