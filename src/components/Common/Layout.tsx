import React, { ReactChildren, ReactChild } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface LayoutProps {
  children: ReactChild | ReactChildren;
}

export function Layout({ children }: LayoutProps) {
  const content = React.Children.toArray(children);
  return (
    <div className="layout">
      <Header />
      {content}
      <Footer />
    </div>
  );
}
