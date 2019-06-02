import React from 'react';
import EventCard from '../components/event-card';
import { Loader } from 'react-bulma-components/full';

const EventsPage = (props) => (
  props.events ? (
    props.events.map(event => {
      return (
        <EventCard
          key={event._id}
          event={event}
        />
      );
    })
  ) : (
    <Loader />
  )
);

export default EventsPage;
