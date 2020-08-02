import React from "react";
import { ThemeProvider } from "styled-components";
import themes from "../styles/themes";

function App() {
  return (
    <>
      <ThemeProvider theme={themes.default}>
        <header>
          <p>Queer Family Tea</p>
        </header>
      </ThemeProvider>
    </>
  );
}

export default App;
