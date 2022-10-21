import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FeaturesBlock = styled.blockquote`
	display: grid;
	grid-template-columns: 20% 1fr;
	gap: 20px;

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
        justify-items: center;
    }
`;

export const FeaturesLinkImage = styled(Link)`
    @media (max-width: 767px) {
        width: 16%;
    }

    @media (max-width: 500px) {
        width: 18%;
    }
`;

export const FeaturesBlockContentHeading = styled.h2`
	color: var(--color-dark);
    font-size: 28px;
    font-family: var( --typography-primary-font-family ), sans-serif;
    font-weight: var( --typography-primary-font-weight );
    margin-bottom: 5px;
    hyphens: manual;
    text-align: center;
    line-height: 1.3;

    @media (max-width: 767px) {
        font-size: 22px;
    }

    @media (max-width: 500px) {
        font-size: 20px;
    }
`;

export const FeaturesBlockContentText = styled.p`
	color: var(--color-dark);
	font-family: var( --typography-text-font-family ), Sans-serif;
    font-weight: var( --typography-text-font-weight );
    font-size: 1.15rem;

    @media (max-width: 767px) {
        font-size: 1rem;
    }

    @media (max-width: 500px) {
        font-size: .93rem;
    }
`;