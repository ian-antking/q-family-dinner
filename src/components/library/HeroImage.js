import React from 'react';
import styled from 'styled-components';


const HeroImage = styled.img`
	height: calc(60vh - 50px);
	margin: 50px 0 0 0;
	width: 100vw;
	background-image: url(${(props) => props.image});
	background-size: cover;
	background-color: #00FF00;
`

export default HeroImage;