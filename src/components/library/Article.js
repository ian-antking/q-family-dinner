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
	'image/webp'
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
			[BLOCKS.HEADING_4]: (node) => {
				return <h4>{node.content[0].value}</h4>
			},
			[BLOCKS.HEADING_5]: (node) => {
				return <h5>{node.content[0].value}</h5>
			},
			[BLOCKS.HEADING_6]: (node) => {
				return <h6>{node.content[0].value}</h6>
			},
			[BLOCKS.PARAGRAPH]: (node, children) => {
				return <p>{children}</p>
			},
			[BLOCKS.EMBEDDED_ASSET]: (node) => {
				return IMAGES.includes(node.data.target.fields.file.contentType) ? (
					<img 
						src={node.data.target.fields.file.url} 
						alt={node.data.target.fields.title}   
					/>
				) : (
					<>
						{null}
					</>
				)
			}
		},
	};


	return (
		<>
			<h1>{text.fields.blurb}</h1> {/*TODO: Is there a better way to do this?*/}
			{documentToReactComponents(text.fields.content, options)}
		</>
	)
};

export default Article;