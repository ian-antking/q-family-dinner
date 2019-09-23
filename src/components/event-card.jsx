import React from 'react';
import {
  Card,
  Heading,
} from 'react-bulma-components/full';
import CollapseText from './collapse-text';
import { parseISO, format } from 'date-fns';
import MapComponent from './map-component';
import { googleKey } from '../utils/api-config';
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
      <MapComponent
        isMarkerShown
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${googleKey}`}
        loadingElement={<div style={{ height: '100%' }} />}
        containerElement={<div style={{ height: '400px' }} />}
        mapElement={<div style={{ height: '100%' }} />}
        longitude={longitude}
        latitude={latitude}
      />
    </Card>
  );
};
export default EventCard;
