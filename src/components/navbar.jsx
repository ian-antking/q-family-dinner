import React from 'react';
import Navbar from 'react-bulma-components/lib/components/navbar';
import Heading from 'react-bulma-components/lib/components/heading';
import { withRouter } from 'react-router-dom';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  _handleMenuClick() {
    this.setState({
      open: !this.state.open,
    });
  }

  _handleNavClick(route) {
    this.props.history.push(route);
    if (this.state.open) this._handleMenuClick();
  }

  render() {
    const { pages } = this.props;
    return (
      <Navbar
        fixed="top"
      >
        <Navbar.Brand>
          <Navbar.Item>
            <Heading
              weight="bold"
              onClick={() => this._handleNavClick('/')}
              id="nav-brand"
            >
              Queer Family Tea
            </Heading>
          </Navbar.Item>
          <Navbar.Burger
            active="open"
            onClick={() => this._handleMenuClick()}
          />
        </Navbar.Brand>
        <Navbar.Menu
          active="open"
          className={this.state.open ? 'is-active' : null}
        >
          <Navbar.Container
            position="end"
          >
            {
              pages && pages.map(page => {
                return page.fields.primaryPage && (
                  <Navbar.Item
                    key={`navlink-${page.sys.id}`}
                    onClick={() => this._handleNavClick(`/${page.fields.slug}`)}
                  >
                    <Heading>{page.fields.title}</Heading>
                  </Navbar.Item>
                );
              })
            }
          </Navbar.Container>
        </Navbar.Menu>
      </Navbar>
    );
  }
}

export default withRouter(Nav);
