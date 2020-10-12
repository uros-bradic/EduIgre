import React from "react";

export function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="footer">
      <div className="rights">Sva prava zadrzana &copy; EDU igre 2020</div>
      <button onClick={handleScrollTop}>&uarr;</button>
    </div>
  );
}
