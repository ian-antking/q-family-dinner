import React from 'react';
import { apiString } from '../config/api';
import Heading from 'react-bulma-components/lib/components/heading';
import Content from 'react-bulma-components/lib/components/content';
import Image from 'react-bulma-components/lib/components/image';

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
    const words = this.state.threeWords;
    return (
      <Content>
        <Image
          src="src/assets/three-words-logo.svg"
          className="three-words"
        />
        <Heading
          size={4}
        >
          <a
            href={`https://what3words.com/${words}`}
          >
            {words}
          </a>
        </Heading>
      </Content>
    );
  }
}

export default ThreeWordsCard;
