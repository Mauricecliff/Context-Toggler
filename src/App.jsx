// import { useState } from "react";
import { useEffect, useState } from "react";
import { CardComp, TogglerComp } from "./components";
import { ThemeProvider } from "./context/Theme";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const darkMode = () => {
    setThemeMode("dark");
  };

  const lightMode = () => {
    setThemeMode("light");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, darkMode, lightMode }}>
      <div className="">
        <div className="flex justify-center my-3">
          <TogglerComp />
        </div>
        <div className="flex justify-center my-3">
          <CardComp />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
