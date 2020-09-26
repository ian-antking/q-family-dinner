import React from 'react';
import styled from 'styled-components';
import Contacts from '../Contacts';

const StyledContributorCard = styled.div`
	padding: 10px 20px;
	border-radius: 5px;
	border: 2px solid ${(props) => props.theme.cardBorder};
	background: ${(props) => props.theme.cardBackground};
	display: flex;
	flex-flow: row nowrap;
	background-color:blue;

	div {
		display: flex;
		flex-flow: column nowrap;
		background-color:green;

		.social-links {
      flex-flow: row nowrap;
			background-color:yellow;
    }
	}

	img {
		height: 100px;
		width: 100px;
		border-radius: 50px;
	}

	h3 {
		color: ${(props) => props.theme.cardHeadingText};
		font-weight: bold;
	}

	p {
		color: ${(props) => props.theme.cardText};
	}

	a {
		color: ${(props) => props.theme.cardText};
	}

`;

const ContributorCard = ({ contributor }) => (
  <StyledContributorCard>
    <div>
      <img
        src={contributor.fields.photo.fields.file.url}
        alt={contributor.fields.photo.fields.description}
      />
    </div>

    <div>
      <h3>{contributor.fields.name}</h3>
      <p>{contributor.fields.bio.content[0].content[0].value}</p>

      <a href={`https://www.instagram.com/${contributor.fields.instagram}`}>
        Instagram icon
      </a>

      <a href={`https://www.facebook.com/${contributor.fields.facebook}`}>
        Facebook icon
      </a>

      <a href={contributor.fields.website}>
        Website icon
      </a>

      <a
        href={`mailto:${contributor.fields.email}`}
        target="_blank"
        rel="noreferrer"
      >
        Email icon
      </a>
    </div>
  </StyledContributorCard>
);

export default ContributorCard;
