import React from "react";

interface CategoryProps {
  title: string;
  description: string;
  pageUrl: string;
  imageUrl: string;
  align: string;
}

export function Category({
  title,
  description,
  imageUrl,
  align
}: CategoryProps) {
  const categoryStyle = {
    background: `url(${imageUrl}) #fdfd`
  };

  const handleCategoryClick = () => {
    return;
  };

  return (
    <div style={categoryStyle} onClick={handleCategoryClick}>
      <div className={`category category--${align}`}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
