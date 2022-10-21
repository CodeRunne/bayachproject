import React from 'react';
import PropTypes from 'prop-types';
import { SectionBodyHeader, SectionBodyHeaderText } from './section-header.styles';

function SectionHeader({ heading="" }) {
	return (
		<SectionBodyHeader className="section__header">
			<SectionBodyHeaderText>{heading}</SectionBodyHeaderText>
		</SectionBodyHeader>
	)
}

SectionHeader.propTypes = {
	heading: PropTypes.string.isRequired
}

export default SectionHeader