import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
	padding: 50px 0px 20px 0;

    @media (max-width: 767px) {
        padding: 30px 0;
    }
`;

export const FooterWrapper = styled.footer`
	gap: 20px;
`;


export const FooterHeader = styled.header`
	gap: 20px;
`;

export const FooterHeadingText = styled.h2`
	color: var(--color-dark);
	text-align: center;
    font-size: 50px;
    font-weight: bold;

    @media (max-width: 767px) {
        font-size: 30px;
    }

    @media (max-width: 500px) {
        font-size: 27px;
    }
`;

export const FooterHeadingContactNumber = styled.h3`
	color: #000000;
    font-family: "Josefin Sans", Sans-serif;
    font-size: 24px;
    font-weight: 900;
    text-align: center;
    line-height: 1.26;

    @media (max-width: 767px) {
        font-size: 19px;
    }

    @media (max-width: 500px) {
        font-size: 17px;
    }
`;	

export const FooterWidgetLinks = styled(Link) `
	color: var( --color-text );
    font-family: var( --text-font-family ), Sans-serif;
    font-weight: var( --text-font-weight );
`;

export const FooterBottomText = styled.div`
	text-align: center;
    color: var(--color-dark);
    font-size: 15px;
    font-family: var( --typography-text-font-family ), sans-serif;
    font-weight: var( --typography-text-font-weight );

    @media (max-width: 767px) {
        font-size: 14px;
    }

    @media (max-width: 500px) {
        font-size: 12px;
    }
`;