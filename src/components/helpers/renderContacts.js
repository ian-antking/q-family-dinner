import React from 'react';
import ContactLogo from '../ContactLogo';

const renderContacts = (contributor) => {
  const contactTypes = [
    'instagram', 'twitter', 'facebook', 'website', 'email',
  ];
  return contactTypes.map((type) => contributor.fields[type] && (
    <ContactLogo
      key={contributor.fields[type]}
      name={type}
      link={contributor.fields[type]}
    />
  ));
};

export default renderContacts;
