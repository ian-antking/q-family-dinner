import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from '../pages/home';
import AboutPage from '../pages/about';
import EventsPage from '../pages/events';
import ContactPage from '../pages/contact';
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
        <Switch>
          <Route
            exact
            path="/"
            render={() => <HomePage />}
          />
          <Route
            path="/about"
            render={() => <AboutPage />}
          />
          <Route
            path="/events"
            render={() => <EventsPage />}
          />
          <Route
            path="/contact"
            render={() => <ContactPage />}
          />
          <Route
            render={() => <Redirect to="/" />}
          />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;