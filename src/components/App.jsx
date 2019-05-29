import React from 'react';
import LazyHero from 'react-lazy-hero';

import '../styles/app.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <LazyHero
        imageSrc="https://unsplash.it/2000/1000"
        minHeight="100vh"
      >
        <h1>Generic Startup Hype Headline</h1>
      </LazyHero>
    );
  }
}

export default App;
