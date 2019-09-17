import React from 'react';
import { apiString } from '../utils/api-config';
import {
  Heading,
} from 'react-bulma-components/full';
import ReactSVG from 'react-svg';


class ThreeWordsCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      threeWords: '',
    };
  }

  _fetchThreeWords = (latitude, longitude) => {
    const url = `${apiString}/map?lat=${latitude}&long=${longitude}`;
    window.fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({
          threeWords: data.words,
        });
      });
  };

  componentDidMount() {
    const { latitude, longitude } = this.props.location;
    this._fetchThreeWords(latitude, longitude);
  }

  render() {
    return (
      <React.Fragment>
        <ReactSVG
          src="../assets/w3w_HorizontalLogo_RGB_Black_ENG.svg"
        />
        <Heading
          size={4}
        >
          {this.state.threeWords}
        </Heading>
      </React.Fragment>
    );
  }
}

export default ThreeWordsCard;
