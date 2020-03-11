import React from 'react';
import EventCard from '../components/event-card';
import Loading from '../components/loading';
import Planning from '../components/planning';
import { parseISO, getUnixTime } from 'date-fns';


const _sortEvents = events => {
  const time = Math.round(new Date().getTime() / 1000);
  return events
    .filter(event => {
      return getUnixTime(parseISO(event.start_time)) > time;
    })
    .reverse();
};

const _renderRepeatEvents = event => {
  const repeatEvents = _sortEvents(event.event_times);
  return repeatEvents.map(repeatEvent => {
    return (
      <EventCard
        key={repeatEvent.id}
        event={event}
        date={repeatEvent.start_time}
      />
    );
  });
};

const _resolveEventType = sortedEvents => {
  return sortedEvents.map(event => {
    if (event.event_times) {
      return _renderRepeatEvents(event);
    }
    return <EventCard key={event.id} event={event} date={event.start_time} />;
  });
};

const _renderNoEvents = () => <Planning />;

const renderEvents = events => {
  const sortedEvents = _sortEvents(events);
  if (sortedEvents.length === 0) {
    return _renderNoEvents();
  }
  return _resolveEventType(sortedEvents);
};

const EventsPage = props => {
  return props.events ? (
    renderEvents(props.events)
  ) : (
    <Loading />
  );
};

export default EventsPage;
