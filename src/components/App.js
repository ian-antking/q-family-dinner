import React, { useEffect, useState } from 'react';
import { Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import themes from '../styles/themes';
import getContent from '../services/get-content';
<<<<<<< HEAD
import Navbar from  './library/Navbar';
import Page from './library/Page';

function App() {
  const [content, setContent] = useState({
  });  
=======
import Navbar from './library/Navbar';
import Routes from './helpers/Routes';
import Footer from './Footer';

function App() {
  const [content, setContent] = useState({});
>>>>>>> c6420638d2a25e140f5b9c22abf504290d6cfc4b

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
<<<<<<< HEAD
        {content.pages && <Page pageContent={content.pages[0]} />}
=======
        <main>
          <Switch>
            { content.pages?.length && (
              <Routes pages={content.pages} />
            )}
          </Switch>
        </main>
        <Footer fundingPartners={content.fundingPartners} contacts={content.contacts} />
>>>>>>> c6420638d2a25e140f5b9c22abf504290d6cfc4b
      </ThemeProvider>
    </>
  );
}

export default App;
