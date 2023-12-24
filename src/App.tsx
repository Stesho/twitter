import React from "react";
import { ThemeProvider } from "styled-components";
import { Switch } from "@/components/ui/Switch/Switch";
import { Theme } from "@/types/theme";
import { darkTheme, lightTheme } from "@/styles/themes";
import { Button } from "@/components/ui/Button/Button";
import { useTheme } from "@/hooks/useTheme";

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <ThemeProvider theme={theme === Theme.light ? lightTheme : darkTheme}>
      <Switch onChange={toggleTheme} />
      <Button>Tweet</Button>
    </ThemeProvider>
  );
};
