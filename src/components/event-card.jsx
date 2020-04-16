import React from 'react';
import Card from 'react-bulma-components/lib/components/card';
import Heading from 'react-bulma-components/lib/components/heading';
import CollapseText from './collapse-text';
import parseISO from 'date-fns/parseISO';
import format from 'date-fns/format';
import MapComponent from './map-component';
import { googleKey } from '../config/api';
import ThreeWordsCard from './three-words-card';

const EventCard = (props) => {
  const date = parseISO(props.date);
  const { longitude, latitude } = props.event.place.location;
  return (
    <Card>
      <Heading
        size={4}
      >
        {props.event.name}
      </Heading>
      <Heading
        size={5}
      >
        {`${format(date, 'do MMM yy')} - ${format(date, 'HH:mm')}`}
      </Heading>
      <CollapseText
        text={props.event.description}
      />
      <Heading>
        Location
      </Heading>
      <ThreeWordsCard
        location={{
          latitude: latitude,
          longitude: longitude,
        }}
      />
      {/* <MapComponent
        isMarkerShown
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${googleKey}`}
        loadingElement={<div style={{ height: '100%' }} />}
        containerElement={<div style={{ height: '400px' }} />}
        mapElement={<div style={{ height: '100%' }} />}
        longitude={longitude}
        latitude={latitude}
      /> */}
    </Card>
  );
};
export default EventCard;
