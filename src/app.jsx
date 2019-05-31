import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from './containers/home';
import Page from './containers/page';
import Colors from './utils/colors';
import Nav from './components/nav';

import './styles/index.scss';

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
            render={(props) => (
              <Page
                {...props}
                color={Colors.trans.blue}
                title={'About Us'}
                page={'about'}
              />
            )
          }
          />
          <Route
            path="/events"
            render={(props) => (
              <Page
                {...props}
                color={Colors.trans.pink}
                title={'Events'}
                page={'events'}
              />
            )
          }
          />
          <Route
            path="/contact"
            render={(props) => (
              <Page
                {...props}
                color={Colors.trans.blue}
                title={'Contact Us'}
                page={'contact'}
              />
            )
          }
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
