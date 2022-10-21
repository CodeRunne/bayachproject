import React from 'react';
import { Link } from 'react-router-dom';
import { 
	FaPhone, 
	FaFacebookF, 
	FaTwitter, 
	FaInstagram, 
	FaYoutube, 
	FaLinkedin, 
	FaPinterest, 
	FaTiktok 
} from 'react-icons/fa';
import { MdMailOutline } from 'react-icons/md';
import { HeaderInfoContainer, HeaderInfoContentContainer, HeaderInfoContent, HeaderInfoIcons } from './header-info.styles';

function HeaderInfo() {
	return (
		<HeaderInfoContainer>
			<HeaderInfoContentContainer className="element-section">
				{/* Header Info Content */}
				<HeaderInfoContent className="header-info-content d-flex">
					<Link to="tel:972543312222" title="tel:+972543312222" className="d-flex d-a-cnt element-info">
						<FaPhone />
						0504584617
					</Link>

					<Link className="d-flex d-a-cnt element-info">
						<MdMailOutline />
						yosefbayach4@gmail.com
					</Link>
				</HeaderInfoContent>

				{/* Header Info Icons */}
				<HeaderInfoIcons className="d-flex">
					<Link to="https://facebook.com" target="_blank">
						<FaFacebookF className="element-social-icon" />
					</Link>
					<Link to="https://twitter.com" target="_blank">
						<FaTwitter className="element-social-icon" />
					</Link>
					<Link to="https://instagram.com" target="_blank">
						<FaInstagram className="element-social-icon" />
					</Link>
					<Link to="https://youtube.com" target="_blank">
						<FaYoutube className="element-social-icon" />
					</Link>
					<Link to="https://linkedin.com" target="_blank">
						<FaLinkedin className="element-social-icon" />
					</Link>
					<Link to="https://pinterest.com" target="_blank">
						<FaPinterest className="element-social-icon" />
					</Link>
					<Link to="https://tiktok.com" target="_blank">
						<FaTiktok className="element-social-icon" /> 
					</Link>
				</HeaderInfoIcons>
			</HeaderInfoContentContainer>
		</HeaderInfoContainer>
	)
}

export default HeaderInfo