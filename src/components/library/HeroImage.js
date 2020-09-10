import React from 'react';
import styled from 'styled-components';


const StyledHeroImage = styled.div`
	height: calc(60vh - 50px);
	margin: 50px 0 0 0;
	width: 100vw;
	background-image: url(${(props) => props.image});
	background-position: center;
	background-size: cover;

	div {
		height: 100%;
		width: 100%;
		background: ${(props) => props.theme.filter };
		opacity: 0.4;
	}
`;

const HeroImage = ({ image }) => {
	return (
		<StyledHeroImage image={image}>
			<div data-testid="filter"/>
		</StyledHeroImage>
	)
};

export default HeroImage;