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

const ContributorCard = () => {
	return(
		<>
		</>
	)
};

export default ContributorCard;