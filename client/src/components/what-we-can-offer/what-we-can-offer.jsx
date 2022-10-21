import React from 'react';
import SectionHeader from '../section-header/section-header';
import SectionBody from '../section-body/section-body';
import { whatWeCanOfferContent } from '../../constants';
import OffersImage from '../../assets/images/pexels-photo-1265902-1024x737.jpeg';
import { OffersContent } from './what-we-can-offer.styles';

function WhatWeCanOffer() {
	const { heading, content } = whatWeCanOfferContent;

	return (
		<section className="what-we-can-offer section-container">
			<SectionHeader  heading={heading} />

			<OffersContent>
				<SectionBody content={content} />
				<figure>
					<img src={OffersImage} alt="what we offer" />
				</figure>	
			</OffersContent>
		</section>
	)
}

export default WhatWeCanOffer;