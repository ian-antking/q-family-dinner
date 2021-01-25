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
import Footer from './components/footer';
import { createClient } from 'contentful';
import dynamicPages from './config/dynamic-pages';

// import 'react-bulma-components/dist/react-bulma-components.min.css';
import './styles/index.scss';
import './styles/mobile.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: {},
    };
    this.contentClient = createClient({
      space: contentful.contentSpace,
      accessToken: contentful.contentToken,
    });
  }

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
    this.fetchEvents();
    this.fetchImages();
  }

  render() {
    const pages = this.state.content.pages && this.state.content.pages;
    const primaryPages = pages ? pages.filter(page => page.fields.primaryPage) : [];
    const discoverablePages = pages ? pages.filter(page => page.fields.discoverable) : [];
    return (
      <React.Fragment>
        <header>
          <Nav pages={primaryPages.concat(dynamicPages)} />
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
                  pages={discoverablePages}
                />
              )}
            />
            {
              pages && pages.concat(dynamicPages)
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
                          pages={discoverablePages}
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
