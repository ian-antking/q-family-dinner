import React from 'react';
import styled from 'styled-components';
import HeroImage from './HeroImage';
import Heading from './Heading';
import Article from './Article';
import Contributors from './Contributors';

const Page = ({ pageContent }) => {

	return (
		<>
			<HeroImage 
				image={pageContent.fields.heroImage.fields.file.url} 
				heading={pageContent.fields.title}
			/>
			<Article 
				text={pageContent}
			/>
			<Contributors
				contributors={pageContent.fields.contributors}>
			</Contributors>
		</>
	)
};

export default Page;