import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import themes from '../styles/themes';
import getContent from '../services/get-content';
import Navbar from  './library/Navbar';
import Page from './library/Page';

function App() {
  const [content, setContent] = useState({
  });  

  useEffect(() => {
    (async () => {
      const data = await getContent();
      setContent(data);
    })();
  }, []);

  console.log(content);

  return (
    <>
      <ThemeProvider theme={themes.default}>
        <Navbar content={content} />
        {content.pages && <Page pageContent={content.pages[0]} />}
      </ThemeProvider>
    </>
  );
}

export default App;
