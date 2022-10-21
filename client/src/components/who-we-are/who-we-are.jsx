import React from 'react';
import SectionHeader from '../section-header/section-header';
import SectionBody from '../section-body/section-body';
import SectionImage from '../../assets/images/rawpixel-651365-unsplash-min-1024x683.jpg';
import { whoWeAreContent } from '../../constants';
import { SectionContainer } from './who-we-are.styles';

function WhoWeAre() {
	const { heading, content } = whoWeAreContent;

	return (
		<SectionContainer className="section-container">
			<img src={SectionImage} alt="Section Hero" />

			<div className="section__content__container">
				<SectionHeader heading={heading} />
				<SectionBody content={content} />
			</div>
		</SectionContainer>
	)
}

export default WhoWeAre;