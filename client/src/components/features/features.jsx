import React from 'react';
import PropTypes from 'prop-types';
import { FeaturesBlock, FeaturesLinkImage, FeaturesBlockContentHeading, FeaturesBlockContentText } from './features.styles';

function Features({ image, heading, content, alt }) {
	return (
		<FeaturesBlock className="features">
			<FeaturesLinkImage>
				<img src={image} alt={alt} />
			</FeaturesLinkImage>

			<div className="features__content">
				<FeaturesBlockContentHeading>{heading}</FeaturesBlockContentHeading>
				<FeaturesBlockContentText>{content}</FeaturesBlockContentText>
			</div>
		</FeaturesBlock>
	)
}

Features.propTypes = {
	heading: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired
}

export default Features;