import React from 'react';
import styled from 'styled-components';
import ContactLogo from '../ContactLogo';
import Contacts from '../Contacts';

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
      flex-flow: row nowrap;
    }
	}

	img {
		height: 100px;
		width: 100px;
		margin: 0 20px 0 0;
		border-radius: 50px;
	}

	h2 {
		margin: 0;
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
      <h2>{contributor.fields.name}</h2>
      <p>{contributor.fields.bio.content[0].content[0].value}</p>
      <div className="social-links">
        <ContactLogo name="instagram" link={contributor.fields.instagram} />
        <ContactLogo name="facebook" link={contributor.fields.facebook} />
        <ContactLogo name="website" link={contributor.fields.website} />
        <ContactLogo name="email" link={contributor.fields.email} />
      </div>
    </div>
  </StyledContributorCard>
);

export default ContributorCard;
