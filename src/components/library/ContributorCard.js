import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Card from './Card';
import renderContacts from '../helpers/renderContacts';
import options from '../helpers/options';

const StyledContributorCard = styled(Card)`
  flex-flow: column nowrap;

  div {
    display: flex;
    flex-flow: row nowrap;
  }

  .contributor-bio {
    flex-flow: column nowrap;
  }

  .contributor-thumb {
    height: 100px;
    width: 100px;
    margin: 0 20px 20px 0;
    border-radius: 50px;
    object-fit: cover;
  }

  .social-links {
    height: 40px;
    font-size: 2.2em;
    flex-flow: row wrap;
    justify-content: space-evenly;
  }

  h1 {
    margin: 0 0 10px 0;
    color: ${(props) => props.theme.cardHeadingText};
    font-weight: bold;
  }

  p {
    margin: 0 0 12px 0;
    color: ${(props) => props.theme.cardText};
  }

  a {
  color: ${(props) => props.theme.cardText};
  }

  ul, ol {
    margin-left: 0;
    padding-left: 20px;
  }

`;

const ContributorCard = ({ contributor }) => (
  <StyledContributorCard>
    <div>
      <img
        className="contributor-thumb"
        src={contributor.fields.photo.fields.file.url}
        alt={contributor.fields.photo.fields.description}
      />
      <h2>{contributor.fields.name}</h2>
    </div>
    <div className="contributor-bio">
      {documentToReactComponents(contributor.fields.bio, options)}
    </div>
    <div className="social-links">
      {renderContacts(contributor)}
    </div>
  </StyledContributorCard>
);

ContributorCard.defaultProps = {
  contributor: {},
};

ContributorCard.propTypes = {
  contributor: PropTypes.shape({
    fields: PropTypes.shape({
      photo: PropTypes.shape({
        fields: PropTypes.shape({
          description: PropTypes.string.isRequired,
          file: PropTypes.shape({
            url: PropTypes.string.isRequired,
          }),
        }),
      }),
      name: PropTypes.string.isRequired,
      bio: PropTypes.shape({
        content: PropTypes.arrayOf(
          PropTypes.shape({
            content: PropTypes.arrayOf(
              PropTypes.shape({}),
            ),
          }),
        ),
      }),
    }),
  }),
};

export default ContributorCard;
