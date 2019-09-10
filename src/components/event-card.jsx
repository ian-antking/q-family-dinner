import React from 'react';
import { Card, Heading } from 'react-bulma-components/full';

const EventCard = (props) => {
  const date = props.event.start_time;
  return (
    <Card>
      <Heading
        size={3}
      >
        {props.event.name}
      </Heading>
      <Heading
        size={4}
      >
        {date}
      </Heading>
    </Card>
  );
};
export default EventCard;
