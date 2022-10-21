import React from 'react';
import Widget from '../widget/widget';
import { FooterWidgetLinkContent } from '../../constants';
import { FooterContainer, FooterWrapper, FooterHeader, FooterHeadingText, FooterHeadingContactNumber, FooterWidgetLinks, FooterBottomText } from './footer.styles';

function Footer() {
	return (
		<FooterContainer>
			<FooterWrapper className="container d-flex d-fd-column">
				<FooterHeader className="d-flex d-fd-column d-a-cnt" style={{ marginBottom: '10px' }}>
					<FooterHeadingText>Serving You Since 2018</FooterHeadingText>
					<Widget style={{ color: 'var(--color-dark)' }} />
					<FooterHeadingContactNumber style={{ textTransform: 'uppercase' }}>
						Call
						<br />
						0504584617
					</FooterHeadingContactNumber>

					<FooterHeadingContactNumber>
						Our Office Address: Menachem Begin
					</FooterHeadingContactNumber>
				</FooterHeader>

				{/* Footer Widget */}
				<div className="footer__widget d-flex d-j-cnt d-a-cnt" style={{ gap: '.5rem' }}>
					{FooterWidgetLinkContent.map(({ url, name }) => (
						<span key={url} className="d-flex d-a-cnt" style={{ gap: '.4rem' }}>
							<FooterWidgetLinks to={`${url}`}>{name}</FooterWidgetLinks>
							|
						</span>
					))}
				</div>

				{/* Footer Bottom */}
				<FooterBottomText className="footer__bottom">
					<p>Copyright © 2018 – 2022 – Marketing Agency / Reach Out / Privacy Policy / Sitemap</p>
				</FooterBottomText>
			</FooterWrapper>
		</FooterContainer>
	)
}

export default Footer