import React from 'react';
import { Card, Heading } from 'react-bulma-components/full';
import moment from 'moment';

const EventCard = (props) => (
  <Card>
    <Heading
      size={3}
    >
      {moment.unix(props.event.date).format('Do MMM YY')}
    </Heading>
    <Heading
      subtitle
      size={6}
    >
      {props.event.address.street}
      <br />
      {props.event.address.city}
      <br />
      {props.event.address.postcode}
    </Heading>
    <Heading
      size={3}
    >
      Menu
    </Heading>
    <ul>
      {
        props.event.menu.map((dish, index) => {
          return (
            <li
              key={index}
            >
              {dish}
            </li>
          );
        })
      }
    </ul>
  </Card>
);

export default EventCard;
