import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import themes from '../styles/themes';
import getContent from '../services/get-content';
import Navbar from  './library/Navbar';

function App() {
  const [content, setContent] = useState({});  

  useEffect(() => {
    (async () => {
      const data = await getContent();
      setContent(data);
    })();
  }, []);

  return (
    <>
      <ThemeProvider theme={themes.default}>
        <Navbar content={content} />
      </ThemeProvider>
    </>
  );
}

export default App;
