import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import themes from "../styles/themes";
import getContent from "../services/get-content";

function App() {
  const [content, setContent] = useState({})

  useEffect(() => {
    (async () => {
      const data = await getContent()
      setContent(data);
    })()
  }, [])

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
