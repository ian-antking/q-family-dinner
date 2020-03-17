import React from 'react';
import Splash from '../components/splash';
import ImageGallery from '../components/image-gallery';
import PageDiscovery from '../components/page-discovery';

const HomePage = props => {
  const {
    images,
    announcements,
    pages,
    flag,
  } = props;
  const renderDiscovery = pages.length > 0;

  return (
    <React.Fragment>
      <Splash
        flag={flag}
        announcements={announcements}
      />
      {renderDiscovery && <PageDiscovery pages={pages} />}
      {images && <ImageGallery images={images} />}
    </React.Fragment>
  );
};

export default HomePage;
