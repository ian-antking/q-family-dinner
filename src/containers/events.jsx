import React from 'react';
import EventCard from '../components/event-card';
import { Loader, Heading } from 'react-bulma-components/full';

const _renderEvents = (events) => {
  return events.length > 0 ? (
    events.map(event => {
      return (
        <EventCard
          key={event.id}
          event={event}
        />
      );
    })
  ) : (
    <React.Fragment>
      <Heading>
        No Events Yet
      </Heading>
      <Heading
        subtitle
      >
        Check back soon!
      </Heading>
    </React.Fragment>
  );
};

const EventsPage = (props) => {
  return (
    props.events ? (
      _renderEvents(props.events)
    ) : (
      <Loader />
    )
  );
};

export default EventsPage;
