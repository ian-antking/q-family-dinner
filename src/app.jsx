import React from 'react';
import {
  Switch,
  Route,
  Redirect,
  withRouter,
} from 'react-router-dom';
import HomePage from './containers/home';
import Page from './containers/page';
import Nav from './components/navbar';
import {
  apiString,
  instagramUsername,
} from './utils/api-config';
import Flags from './utils/q-flags';
import Footer from './components/footer';
import { createClient } from 'contentful';

import './styles/index.scss';
import './styles/mobile.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      announcements: null,
      articles: null,
      pages: null,
      events: null,
      images: null,
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

  fetchEvents() {
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

  fetchImages() {
    const url = `https://www.instagram.com/${instagramUsername}/?__a=1`;
    window.fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({
          images: data.graphql.user.edge_owner_to_timeline_media.edges,
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

  getContent(content, type) {
    content.getEntries({
      content_type: type,
    }).then(data => {
      this.setState({
        ...this.state,
        [`${type}s`]: data.items,
      });
    });
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    const content = createClient({
      space: 'yq2ab76w5obt',
      accessToken: 'wePDL7dw8XEw_ph3Ds_c4us7XthCD3b1TMWUmSe_p94',
    });
    this.getContent(content, 'announcement');
    this.getContent(content, 'page');
    this.getContent(content, 'article');
    this.fetchEvents();
    this.fetchImages();
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
                  images={this.state.images}
                  announcements={this.state.announcements}
                />
              )}
            />
            {
              this.state.pages && (
                this.state.pages.map(page => {
                  return (
                    <Route
                      key={page.sys.id}
                      path={`/${page.fields.path.toLowerCase()}`}
                      render={(props) => (
                        <Page
                          {...props}
                          title={page.fields.title}
                          content={page.fields.content}
                        />
                      )}
                    />
                  );
                })
              )
            }
            <Route
              path="/events"
              render={(props) => (
                <Page
                  {...props}
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
                  title={'Contact'}
                  page={'contact'}
                />
              )
            }
            />
            <Route
              render={() => <Redirect to="/" />}
            />
          </Switch>
        </article>
        <Footer pathname={this.props.location.pathname} />
      </React.Fragment>
    );
  }
}

export default withRouter(App);
