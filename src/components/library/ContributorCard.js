import React from 'react';
import styled from 'styled-components';
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

const ContributorCard = ({ contributor }) => {
  const contactTypes = [
    'instagram', 'twitter', 'facebook', 'website', 'email',
  ];

  const renderContacts = () => {
    return contactTypes.map((type) => contributor.fields[type] && (
      <ContactLogo
				key={contributor.fields[type]}
        name={type}
        link={contributor.fields[type]}
      />
    ));
  };

	console.log(contributor);

  return (
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
          {renderContacts()}
        </div>
      </div>
    </StyledContributorCard>
  );
};

export default ContributorCard;
