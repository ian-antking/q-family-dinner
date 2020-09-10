import React, { useEffect, useState } from 'react';
import { Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import themes from '../styles/themes';
import getContent from '../services/get-content';
import Navbar from './library/Navbar';
import Routes from './helpers/routes';

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
        <Switch>
          { content.pages?.length && <Routes pages={content.pages} /> }
        </Switch>
      </ThemeProvider>
    </>
  );
}

export default App;
