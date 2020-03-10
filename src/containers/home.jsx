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
  const discoverablePages = pages && pages.filter(page => page.fields);
  const renderDiscovery = discoverablePages && discoverablePages.length > 0;

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
      {renderDiscovery && <PageDiscovery pages={discoverablePages} />}
      {images && <ImageGallery images={props.images} />}
    </React.Fragment>
  );
};

export default HomePage;
