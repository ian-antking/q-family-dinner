import React from 'react';
import {
  Switch,
  Route,
  Redirect,
  withRouter,
  Link,
} from 'react-router-dom';
import HomePage from './containers/home';
import Page from './containers/page';
import Colors from './utils/colors';
import Nav from './components/Nav';
import apiString from './utils/api-config';
import Flags from './utils/q-flags';
import SocialsCard from './components/socials-card';

import './styles/index.scss';
import './styles/mobile.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: null,
      splashFlag: this._randomFlag(),
    };
    this.flagInterval = setInterval(() => {
      if (this.props.location.pathname === '/') {
        this.changeFlag();
      }
    }, 5000);
  }

  _randomFlag = () => {
    const keys = Object.keys(Flags);
    return Flags[keys[Math.floor(Math.random() * keys.length)]];
  };

  _fetchEvents() {
    window.fetch(`${apiString}/event`)
      .then(res => res.json())
      .then(body => {
        const eventList = body.data.sort((event1, event2) => {
          return event1.date - event2.date;
        });
        this.setState({
          events: eventList,
        });
      });
  }

  changeFlag = () => {
    const flag = this._randomFlag();
    if (this.state.splashFlag !== flag) {
      this.setState({
        splashFlag: flag,
      });
    } else {
      this.changeFlag();
    }
  };

  componentDidMount() {
    this._fetchEvents();
  }

  componentWillUnmount() {
    clearInterval(this.flagInterval);
  }

  render() {
    return (
      <React.Fragment>
        <header>
          <Nav />
        </header>
        <article>
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <HomePage
                  {...props}
                  flag={this.state.splashFlag}
                />
              )}
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
                  events={this.state.events}
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
                  title={'Contact'}
                  page={'contact'}
                />
              )
            }
            />
            <Route
              exact
              path="/privacy"
              render={(props) => (
                <Page
                  {...props}
                  color={Colors.trans.pink}
                  title={'Privacy Policy'}
                  page={'privacy'}
                />
              )}
            />
            <Route
              render={() => <Redirect to="/" />}
            />
          </Switch>
        </article>
        <footer>
          { this.props.location.pathname !== '/contact' ? (
            <SocialsCard
              facebook="https://www.facebook.com/Queer-Family-Tea-638643326624464"
              instagram="https://www.instagram.com/queerfamilytea/"
              email="mailto:info@queerfamilytea.com"
            />
          ) : (
            null
          )
          }
          { this.props.location.pathname !== '/privacy' ? (
            <div className="link-list">
              <Link className="link" to="/privacy">Our Privacy Policy</Link>
            </div>
          ) : (
            null
          )
          }
        </footer>
      </React.Fragment>
    );
  }
}

export default withRouter(App);
