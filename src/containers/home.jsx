import React from 'react';
import Splash from '../components/splash';
import ImageGallery from '../components/image-gallery';

const HomePage = (props) => (
  <React.Fragment>
    <Splash
      flag={props.flag}
    />
    {props.images ? (
      <ImageGallery
        images={props.images}
      />
    ) : (
      null
    )
  }
  </React.Fragment>
);

export default HomePage;
