import React from 'react';
import PropTypes from 'prop-types';
import { SectionBodyContent, SectionBodyContentText } from './section-body.styles';

function SectionBody({ content=[] }) {
	return (
		<div className="section__body">
			<SectionBodyContent className="d-flex d-fd-column">
				{content.map(content => (
					<SectionBodyContentText key={content}>{content}</SectionBodyContentText>
				))}
			</SectionBodyContent>
		</div>
	)
}

SectionBody.propTypes = {
	content: PropTypes.array.isRequired
}

export default SectionBody;