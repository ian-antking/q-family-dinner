import React from 'react';
import '../styles/collapse-text.scss';

class CollapseText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  toggle = () => {
    this.setState({
      expanded: !this.state.expanded,
    });
  };

  render() {
    const { expanded } = this.state;
    return (
      <p
        className={expanded ? 'open' : 'closed'}
        onClick={this.toggle}
      >
        {this.props.text}
      </p>
    );
  }
}

export default CollapseText;
