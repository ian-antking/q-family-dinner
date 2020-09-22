import React from 'react';
import ContributorCard from './ContributorCard'

const Contributors = ({ contributors }) => {
  return(
    <>
      {contributors[0] && contributors.map(contributor => {
        return (
          <ContributorCard
            key={contributor.fields.name}
            contributor={contributor}
          />
        )
      })}
    </>
  )
};

export default Contributors;