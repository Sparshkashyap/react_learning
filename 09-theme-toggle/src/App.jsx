import { useContext } from "react";
import Navbar from "./Navbar";
import ThemeButton from "./ThemeButton";
import { ThemeContext } from "./ThemeContext";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor:
          theme === "dark"
            ? "#1a1a1a"
            : "#ffffff",
        color:
          theme === "dark"
            ? "#ffffff"
            : "#000000",
        padding: "20px",
        transition: "all 0.3s ease"
      }}
    >
      <Navbar />

      <ThemeButton />

      <h1>Theme Toggle Demo</h1>

      <p>
        Current Theme: {theme}
      </p>

      <p>
        This entire page changes
        when the theme changes.
      </p>
    </div>
  );
}

export default App;