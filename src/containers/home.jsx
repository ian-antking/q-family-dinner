import React from 'react';
import Splash from '../components/splash';
import ImageGallery from '../components/image-gallery';
import AnnouncementCard from '../components/announcement-card';
import {
  Content,
} from 'react-bulma-components/full';
import PageDiscovery from '../components/page-discovery';

const HomePage = props => {
  const { images, announcements, pages } = props;
  const renderDiscovery = pages.length > 0;

  return (
    <React.Fragment>
      <Splash flag={props.flag} />
      <Content>
        {announcements && announcements.map(announcement => {
          return (
            <AnnouncementCard key={announcement.sys.id} announcement={announcement} />
          );
        })}
      </Content>
      {renderDiscovery && <PageDiscovery pages={pages} />}
      {images && <ImageGallery images={props.images} />}
    </React.Fragment>
  );
};

export default HomePage;
