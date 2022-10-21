import React from 'react';
import PropTypes from 'prop-types';
import { NavigationLink } from './navigation-links.styles';

function NavigationLinks({ url, name }) {
	return (
		<li key={url}>
			<NavigationLink to={url}>{name}</NavigationLink>
		</li>
	)
}

NavigationLinks.propTypes = {
	url: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired
}

export default NavigationLinks