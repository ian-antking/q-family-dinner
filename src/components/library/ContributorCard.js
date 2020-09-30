import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { INLINES, BLOCKS } from '@contentful/rich-text-types';
import ArticleCard from './ArticleCard';
import ContactLogo from '../ContactLogo';

const StyledContributorCard = styled.div`
  width: calc(100vw - 60px);
  margin: 10px;
  padding: 20px;
  border-radius: 5px;
  border: 2px solid ${(props) => props.theme.cardBorder};
  background: ${(props) => props.theme.cardBackground};
  display: flex;
  flex-flow: row nowrap;

  div {
  display: flex;
  flex-flow: column nowrap;

  .social-links {
    height: 40px;
    font-size: 2.2em;
    flex-flow: row wrap;
    justify-content: flex-end;
    }
  }

  .contributor-thumb {
    height: 100px;
    width: 100px;
    margin: 0 20px 0 0;
    border-radius: 50px;
    object-fit: cover;
  }

  img {
    width: 80%;
  }

  h1, h2, h3, h4, h5, h6 {
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

  li>p {
    margin: 8px;
  }

  blockquote {
    color: ${(props) => props.theme.quoteText};
    font-style: italic;
    font-size: 1.1em;
  }

`;

const ContributorCard = ({ contributor }) => {
  const contactTypes = [
    'instagram', 'twitter', 'facebook', 'website', 'email',
  ];

  const renderContacts = () => contactTypes.map((type) => contributor.fields[type] && (
  <ContactLogo
    key={contributor.fields[type]}
    name={type}
    link={contributor.fields[type]}
  />
  ));

  const options = {
    renderNode: {
      [BLOCKS.HEADING_1]: (node) => <h1>{node.content[0].value}</h1>,
      [BLOCKS.HEADING_2]: (node) => <h2>{node.content[0].value}</h2>,
      [BLOCKS.HEADING_3]: (node) => <h3>{node.content[0].value}</h3>,
      [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
      [BLOCKS.EMBEDDED_ASSET]: (node) => (
        <img
          src={node.data.target.fields.file.url}
          alt={node.data.target.fields.description}
        />
      ),
      [BLOCKS.EMBEDDED_ENTRY]: (node) => (
        <ArticleCard
          targetArticle={node}
        />
      ),
      [INLINES.ASSET_HYPERLINK]: (node) => (
        <a
          href={node.data.target.fields.file.url}
        >
          {node.content[0].value}
        </a>
      ),
    },
  };

  return (
    <StyledContributorCard>
      <div>
        <img
          className="contributor-thumb"
          src={contributor.fields.photo.fields.file.url}
          alt={contributor.fields.photo.fields.description}
        />
      </div>

      <div>
        <h2>{contributor.fields.name}</h2>
        {documentToReactComponents(contributor.fields.bio, options)}
        <div className="social-links">
          {renderContacts()}
        </div>
      </div>
    </StyledContributorCard>
  );
};

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
              PropTypes.shape({
                value: PropTypes.string.isRequired,

              }),
            ),
          }),
        ),
      }),
    }),
  }),
};

export default ContributorCard;
