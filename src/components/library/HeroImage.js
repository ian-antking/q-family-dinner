import React from 'react';
import styled from 'styled-components';
import Heading from './Heading';


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
		display: flex;
		flex-flow: column nowrap;
		justify-content: center;
		align-items: center;
	}
`;

const HeroImage = ({ image, heading }) => {
	return (
		<StyledHeroImage image={image}>
			<div data-testid="filter">
				<Heading>
					{heading}
				</Heading>
			</div>
		</StyledHeroImage>
	)
};

export default HeroImage;