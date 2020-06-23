import React, { useState, useEffect } from 'react';
import LazyHero from 'react-lazy-hero';
import Heading from 'react-bulma-components/lib/components/heading';
import Box from 'react-bulma-components/lib/components/box';
import Colors from '../utils/colors';
import AnnouncementCard from '../components/announcement-card';
import Flags from '../utils/q-flags';

const textStyle = {
  color: Colors.trans.white,
};

const Splash = (props) => {
  const { announcements } = props;
  const announcement = announcements && announcements[0];
  const rotation = announcements ? '0' : '-20';

  const randomFlag = () => {
    const keys = Object.keys(Flags);
    return Flags[keys[Math.floor(Math.random() * keys.length)]];
  };

  const [flag, setFlag] = useState(randomFlag());

  useEffect(() => {
    const flagTimer = setInterval(() => setFlag(randomFlag()), 5000);
    return () => clearInterval(flagTimer);
  });

  return (
    <LazyHero
      minHeight="100vh"
      opacity={0.5}
      imgSrc=""
      style={
      {
        background: flag,
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
