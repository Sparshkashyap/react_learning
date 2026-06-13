import {
  useContext
} from "react";

import {
  ThemeContext
} from "./ThemeContext";

function ThemeButton() {
  const {
    theme,
    toggleTheme
  } = useContext(
    ThemeContext
  );

  return (
    <>
      <h3>
        Current Theme:
        {theme}
      </h3>

      <button
        onClick={toggleTheme}
      >
        Toggle Theme
      </button>
    </>
  );
}

export default ThemeButton;