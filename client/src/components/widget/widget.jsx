import React from 'react';
import PropTypes from 'prop-types';
import { 
	FaFacebookF, 
	FaTwitter, 
	FaInstagram, 
	FaYoutube, 
	FaLinkedin, 
	FaPinterest, 
	FaTiktok 
} from 'react-icons/fa';
import { WidgetContainer, WidgetLink } from './widget.styles';

function Widget({ style }) {
	return (
		<WidgetContainer className="d-flex d-j-cnt">
			<WidgetLink style={style} to="https://facebook.com" target="_blank">
				<FaFacebookF />
			</WidgetLink>

			<WidgetLink style={style} to="https://twitter.com" target="_blank">
				<FaTwitter />
			</WidgetLink>

			<WidgetLink style={style} to="https://instagram.com" target="_blank">
				<FaInstagram />
			</WidgetLink>

			<WidgetLink style={style} to="https://youtube.com" target="_blank">
				<FaYoutube />
			</WidgetLink>

			<WidgetLink style={style} to="https://linkedin.com" target="_blank">
				<FaLinkedin />
			</WidgetLink>

			<WidgetLink style={style} to="https://pinterest.com" target="_blank">
				<FaPinterest />
			</WidgetLink>

			<WidgetLink style={style} to="https://tiktok.com" target="_blank">
				<FaTiktok />
			</WidgetLink>
		</WidgetContainer>
	)
}


Widget.propTypes = {
	style: PropTypes.object.isRequired
}

export default Widget;