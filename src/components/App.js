import React, { useEffect, useState } from 'react';
import { Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import themes from '../styles/themes';
import getContent from '../services/get-content';
import Navbar from './library/Navbar';
import Routes from './helpers/Routes';
import Footer from './Footer';

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
        <main>
          <Switch>
            { content.pages?.length && (
              <Routes pages={content.pages} />
            )}
          </Switch>
        </main>
        <Footer fundingPartners={content.fundingPartners} contacts={content.contacts} />
      </ThemeProvider>
    </>
  );
}

export default App;
