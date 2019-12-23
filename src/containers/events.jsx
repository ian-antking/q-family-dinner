import React from 'react';
import EventCard from '../components/event-card';
import { Loader, Heading } from 'react-bulma-components/full';
import { parseISO, getUnixTime } from 'date-fns';

const _sortEvents = (events) => {
  const time = Math.round((new Date()).getTime() / 1000);
  return events.filter((event) => {
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
  const sortedEvents = _sortEvents(events);
  return sortedEvents.lenth > 0 ? (
    sortedEvents.map(event => {
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
        We're still planning!
      </Heading>
      <Heading
        subtitle
      >
        Why not come to our weekly get-together?
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
