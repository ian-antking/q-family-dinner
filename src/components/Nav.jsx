import React from 'react';
import { Navbar, Heading } from 'react-bulma-components/full';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.links = [
      {
        name: 'About',
        route: '/about',
      },
      {
        name: 'Events',
        route: '/events',
      },
      {
        name: 'Contact',
        route: '/contact',
      },
    ];
    this.state = {
      open: false,
    };
  }

  _handleMenuClick() {
    this.setState({
      open: !this.state.open,
    });
  }

  render() {
    return (
      <Navbar
        fixed="top"
      >
        <Navbar.Brand>
          <Navbar.Item>
            <Heading
              weight="bold"
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
              this.links.map(link => {
                return (
                  <Navbar.Item
                    key={`navlink-${link.name}`}
                    onClick={() => window.alert(link.name)}
                  >
                    <h2>{link.name}</h2>
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

export default Nav;
