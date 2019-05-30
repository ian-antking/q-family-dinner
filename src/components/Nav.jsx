import React from 'react';
import { Navbar } from 'react-bulma-components/full';

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

  render() {
    return (
      <Navbar
        fixed="top"
      >
        <Navbar.Brand>
          <Navbar.Item>
            <h1>Queer Family Tea</h1>
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
            <Navbar.Item>
              <h2>About</h2>
            </Navbar.Item>
            <Navbar.Item>
              <h2>Events</h2>
            </Navbar.Item>
          </Navbar.Container>
        </Navbar.Menu>
      </Navbar>
    );
  }
}

export default Nav;
