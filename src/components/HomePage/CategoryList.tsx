import React from "react";
import { Category } from "./Category";
import { Categories } from "./Categories";

export function CategoryList() {
  const CategoryList = Categories.map((category) => <Category {...category} />);
  return <div className="categories">{CategoryList}</div>;
}
