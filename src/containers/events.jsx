import React from 'react';
import EventCard from '../components/event-card';
import { Loader, Heading } from 'react-bulma-components/full';
import { parseISO, getUnixTime } from 'date-fns';

const _sortEvents = (events) => {
  return events.filter((event) => {
    const time = Math.round((new Date()).getTime() / 1000);
    return getUnixTime(parseISO(event.start_time)) > time;
  }).reverse();
};

const _renderRepeatEvents = (event) => {
  const repeatEvents = _sortEvents(event.event_times);
  return (
    repeatEvents.map(repeatEvent => {
      return (
        <EventCard
          key={repeatEvent.id}
          event={event}
          date={repeatEvent.start_time}
        />
      );
    })
  );
};

const renderEvents = (events) => {
  return events ? (
    events.map(event => {
      if (event.event_times) {
        return _renderRepeatEvents(event);
      }
      return (
        <EventCard
          key={event.id}
          event={event}
          date={event.start_time}
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
      renderEvents(props.events)
    ) : (
      <React.Fragment>
        <Heading>
          Loading...
        </Heading>
        <Loader />
      </React.Fragment>
    )
  );
};

export default EventsPage;
