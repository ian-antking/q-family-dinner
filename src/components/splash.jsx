import React from 'react';
import LazyHero from 'react-lazy-hero';
import Heading from 'react-bulma-components/lib/components/heading';
import Box from 'react-bulma-components/lib/components/box';
import Colors from '../utils/colors';
import AnnouncementCard from '../components/announcement-card';

const textStyle = {
  color: Colors.trans.white,
};

const Splash = (props) => {
  const { announcements } = props;
  const announcement = announcements && announcements[0];
  const rotation = announcements ? '0' : '-20';
  return (
    <LazyHero
      minHeight="100vh"
      opacity={0.5}
      imgSrc=""
      style={
      {
        background: props.flag,
        overflow: 'hidden',
      }
    }
    >
      <Box
        style={
        {
          backgroundColor: Colors.general.darkGrey,
          padding: '50px',
          transform: `rotate(${rotation}deg)`,
        }
      }
      >
        <Heading
          size={1}
          weight="bold"
          style={textStyle}
        >
        Queer Family Tea
        </Heading>
        <Heading
          size={4}
          subtitle
          style={textStyle}
        >
        For the queer community by the queer community.
        </Heading>
      </Box>
      {announcement && <AnnouncementCard key={announcement.sys.id} announcement={announcement} />}
    </LazyHero>);
};

export default Splash;
