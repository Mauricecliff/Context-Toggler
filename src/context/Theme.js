import { createContext, useContext } from "react";

const themeContext = createContext({
  themeMode: "light",
  darkMode: () => {},
  lightMode: () => {},
});

export const ThemeProvider = themeContext.Provider;

const useTheme = () => {
  return useContext(themeContext);
};

export default useTheme;
