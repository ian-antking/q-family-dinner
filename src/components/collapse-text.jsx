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
    return this.props.text ?
      (
        <React.Fragment>
          <p
            className={expanded ? 'open' : 'closed'}
            style={{ whiteSpace: 'pre-line' }}
          >
            {this.props.text}
          </p>
          <div
            className="expand-button"
            onClick={this.toggle}
          >
            <b>{expanded ? 'show less' : 'show more...' }</b>
          </div>
        </React.Fragment>
      ) : (null);
  }
}

export default CollapseText;
