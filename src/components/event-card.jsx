import React from 'react';
import {
  Card,
  Heading,
  Content,
} from 'react-bulma-components/full';
import { parseISO, format } from 'date-fns';
import MapComponent from './map-component';
import { googleKey } from '../utils/api-config';

const EventCard = (props) => {
  const date = parseISO(props.event.start_time);
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
        {`${format(date, 'io MMM yy')} - ${format(date, 'HH:mm')}`}
      </Heading>
      <Content style={{ whiteSpace: 'pre-line' }}>
        {props.event.description}
      </Content>
      <Heading>
        Location
      </Heading>
      <MapComponent
        isMarkerShown
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${googleKey}`}
        loadingElement={<div style={{ height: '100%' }} />}
        containerElement={<div style={{ height: '400px' }} />}
        mapElement={<div style={{ height: '100%' }} />}
        longitude={props.event.place.location.longitude}
        latitude={props.event.place.location.latitude}
      />
    </Card>
  );
};
export default EventCard;
