import React from 'react';
import styled from 'styled-components';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';



const StyledArticle = styled.p`
	width: calc(100vw - 40px);
	margin: 0;
	padding: 20px;
	color: ${(props) => props.theme.articleText };
	background: whitesmoke;
`;

//Insert media query to increase font size to 1.2em on desktop scale.

const Article = ({ text }) => {
	console.log(text.fields.content);
	return (
		<>
			{documentToReactComponents(text.fields.content)}
		</>
	)
};

export default Article;