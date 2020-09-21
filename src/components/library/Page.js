import React from 'react';
import styled from 'styled-components';
import HeroImage from './HeroImage';
import Heading from './Heading';
import Article from './Article';
import ContributorCard from './ContributorCard';

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
			<ContributorCard>
			</ContributorCard>
		</>
	)
};

export default Page;