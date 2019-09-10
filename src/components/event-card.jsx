import React from 'react';
import { Card, Heading, Container } from 'react-bulma-components/full';
import { parseISO, format } from 'date-fns';

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
      <Container>
        {props.event.description}
      </Container>
      <Heading>
        Location
      </Heading>
      <Container>
        <span>{props.event.place.location.city}</span>
        <span>{props.event.place.location.longitude}</span>
        <span>{props.event.place.location.latitude}</span>
      </Container>
    </Card>
  );
};
export default EventCard;
