import React, { useCallback } from "react";
import { useNavigation } from "react-navi";

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
  pageUrl,
  align
}: CategoryProps) {
  const categoryStyle = {
    background: `url(${imageUrl}) #fdfd`
  };

  const navigation = useNavigation();

  const handleCategoryClick = useCallback(() => {
    navigation.navigate(pageUrl);
  }, [pageUrl, navigation]);

  return (
    <div style={categoryStyle} onClick={handleCategoryClick}>
      <div className={`category category--${align}`}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
