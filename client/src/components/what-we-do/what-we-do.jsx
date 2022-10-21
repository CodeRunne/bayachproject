import React from 'react';
import SectionHeader from '../section-header/section-header';
import SectionBody from '../section-body/section-body';
import { whatWeDOContent } from '../../constants';

function WhatWeDo() {
	const { heading, content } = whatWeDOContent;

	return (
		<section className="section-container">
			<SectionHeader heading={heading} />
			<SectionBody content={content} />
		</section>
	)
}

export default WhatWeDo;