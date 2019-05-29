import React from 'react';
import HomePage from '../pages/home';
import Nav from './Nav';

import '../styles/index.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <Nav />
        <HomePage />
      </React.Fragment>
    );
  }
}

export default App;
