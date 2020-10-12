import React, { useCallback } from "react";
import { useNavigation } from "react-navi";

export function Navigation() {
  const navigation = useNavigation();

  const handleCategoriesClick = useCallback(() => {
    navigation.navigate("/");
  }, [navigation]);

  const handleContactUsClick = useCallback(() => {
    navigation.navigate("/contact");
  }, [navigation]);

  const handleAboutUsClick = useCallback(() => {
    navigation.navigate("/about");
  }, [navigation]);

  return (
    <nav className="nav nav--horizontal">
      <ul>
        <li>
          <button onClick={handleContactUsClick}>Kontakt</button>
        </li>
        <li>
          <button onClick={handleCategoriesClick}>Kategorije</button>
        </li>
        <li>
          <button onClick={handleAboutUsClick}>O nama</button>
        </li>
      </ul>
    </nav>
  );
}
