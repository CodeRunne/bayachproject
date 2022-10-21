import styled from 'styled-components';
import CTAImage from '../../assets/images/phil-coffman-161251-unsplash1-1.jpg';

export const CTAContainer = styled.section`
	background-image: url(${CTAImage}), linear-gradient(to top right, rgba(0,0,0,0.1), rgba(0,0,0,0.08));
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;

    position: relative;
    z-index: 2;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
        z-index: -1;
    }
`;

export const CTAWrapper = styled.div`
    min-height: 500px;
    gap: 20px;
`;

export const CTAHeaderText = styled.h2`
    color: var(--white);
    font-size: 90px;
    font-weight: 600;
    font-family: var( --typography-primary-font-family ), sans-serif;

    @media (max-width: 767px) {
        font-size: 50px;
    }

    @media (max-width: 767px) {
        font-size: 35px;
    }
`;

export const CTANumber = styled.p`
    text-align: center;
    color: var(--white);
    font-family: "Arial", Sans-serif;
    font-size: 23px;
    font-weight: 300;
    text-transform: capitalize;

    @media (max-width: 767px) {
        font-size: 17px;
    }
`;