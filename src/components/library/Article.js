import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { INLINES, BLOCKS } from '@contentful/rich-text-types';


const TestStyle = styled.h1`
	color: red;
`;

const IMAGES = [
  'image/png',
  'image/jpeg',
];

const Article = ({ text }) => {

	const options = {
		renderNode: {
			[BLOCKS.HEADING_1]: (node) => {
				return <TestStyle>{node.content[0].value}</TestStyle>
			},
			[BLOCKS.HEADING_2]: (node) => {
				return <h2>{node.content[0].value}</h2>
			},
			[BLOCKS.HEADING_3]: (node) => {
				return <h3>{node.content[0].value}</h3>
			},
			[BLOCKS.PARAGRAPH]: (node, children) => {
				return <p>{children}</p>
			},
		},
	};


	return (
		<>
			{documentToReactComponents(text.fields.content, options)}
		</>
	)
};

export default Article;