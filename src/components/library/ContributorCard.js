import React from 'react';
import styled from 'styled-components';

const StyledContributorCard = styled.div`
	padding: 10px 20px;
	border-radius: 5px;
	border: 2px solid ${(props) => props.theme.cardBorder};
	background: ${(props) => props.theme.cardBackground};
	display: flex;
	flex-flow: row nowrap;

	div {
		display: flex;
		flex-flow: column nowrap;
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

const ContributorCard = (contributors) => {


	return(
		<StyledContributorCard>
			<div>
				<img />
			</div>

			<div>
				<h3>{contributor.fields.bio.name}</h3>
				<p>{contributor.fields.bio.content[0].content[0].value}</p>
				<div>
					<a href={`https://www.instagram.com/${contributor.fields.bio.instagram}`}>
						Instagram icon
					</a>

					<a href={`https://www.facebook.com/${contributor.fields.bio.facebook}`}>
						Facebook icon
					</a>

					<a href={contributor.fields.bio.website}>
						Website icon
					</a>

					<a 
						href={`mailto:${contributor.fields.bio.email}`} 
						target="_blank" 
						rel="noreferrer"
					>
						Email icon
					</a>
				</div>
			</div>

		</StyledContributorCard>
	)
};

export default ContributorCard;