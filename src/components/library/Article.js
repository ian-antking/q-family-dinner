import React from 'react';
import styled from 'styled-components';

const StyledArticle = styled.p`
	width: calc(100vw - 40px);
	margin: 0;
	padding: 20px;
	color: ${(props) => props.theme.articleText };
	background: whitesmoke;
`;

//Insert media query to increase font size to 1.2em on desktop scale.

const Article = ({ text }) => {
	return (
		<StyledArticle>
			{text} 
		</StyledArticle>
	)
};

export default Article;