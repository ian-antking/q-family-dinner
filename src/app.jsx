import React from 'react';
import {
  Switch,
  Route,
  withRouter,
} from 'react-router-dom';
import HomePage from './containers/home';
import Page from './containers/page';
import Nav from './components/navbar';
import {
  apiString,
  instagramUsername,
  contentful,
} from './config/api';
import Flags from './utils/q-flags';
import Footer from './components/footer';
import { createClient } from 'contentful';
import dynamicPages from './config/dynamic-pages';

import './styles/index.scss';
import './styles/mobile.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: {},
      splashFlag: this._randomFlag(),
    };
    this.flagInterval = setInterval(() => this.props.location.pathname === '/' && this.changeFlag(), 5000);
    this.contentClient = createClient({
      space: contentful.contentSpace,
      accessToken: contentful.contentToken,
    });
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

  componentDidMount() {
    this.contentClient.getEntries().then(data => {
      const contentTypes = [...new Set(data.items.map(item => item.sys.contentType.sys.id))];
      const content = {};
      contentTypes.forEach(type => {
        content[`${type}s`] = data.items.filter(item => item.sys.contentType.sys.id === type);
      });
      this.setState({
        ...this.state,
        content: content,
      });
    });
    // this.fetchEvents();
    // this.fetchImages();
  }

  render() {
    return (
      <React.Fragment>
        <header>
          <Nav pages={this.state.content.pages && this.state.content.pages.concat(dynamicPages)} />
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
                  announcements={this.state.content.announcements}
                  pages={this.state.content.pages}
                />
              )}
            />
            {
              this.state.content.pages && this.state.content.pages
                .concat(dynamicPages)
                .map(page => {
                  return (
                    <Route
                      key={page.sys.id}
                      path={`/${page.fields.slug}`}
                      render={(props) => (
                        <Page
                          {...props}
                          page={page}
                          events={this.state.events}
                        />
                      )
                  }
                    />
                  );
                })
            }
            <Route
              path={'/:name'}
              render={(props) => (
                <Page
                  {...props}
                  pages={this.state.content.pages}
                  events={this.state.events}
                />)
              }
            />
          </Switch>
        </article>
        <Footer pathname={this.props.location.pathname} />
      </React.Fragment>
    );
  }
}

export default withRouter(App);
