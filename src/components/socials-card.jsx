import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons/faFacebookSquare';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons/faEnvelopeSquare';
import { faDesktop } from '@fortawesome/free-solid-svg-icons/faDesktop';

const SocialsCard = (props) => (
  <div className="link-list">
    { props.website ? (
      <a href={props.website}>
        <FontAwesomeIcon icon={faDesktop} />
      </a>
    ) : (null) }
    { props.facebook ? (
      <a href={props.facebook}>
        <FontAwesomeIcon icon={faFacebookSquare} />
      </a>
    ) : (null) }
    { props.instagram ? (
      <a href={props.instagram}>
        <FontAwesomeIcon icon={faInstagram} />
      </a>
    ) : (null) }
    { props.email ? (
      <a href={props.email}>
        <FontAwesomeIcon icon={faEnvelopeSquare} />
      </a>
    ) : (null) }
  </div>
);

export default SocialsCard;
