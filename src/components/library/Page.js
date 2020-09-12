import React from 'react';
import styled from 'styled-components';
import HeroImage from './HeroImage';
import Heading from './Heading';
import Article from './Article';

const Page = ({ pageContent }) => {

	return (
		<>
			<HeroImage 
				image={pageContent.fields.heroImage.fields.file.url} 
				heading={pageContent.fields.title}
			/>
			<Article 
				text={"Placeholder Text"}
			/>
		</>
	)
};

export default Page;