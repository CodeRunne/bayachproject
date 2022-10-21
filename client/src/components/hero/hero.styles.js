import styled from 'styled-components';
import HeroImage from '../../assets/images/hero.jpg';

export const HeroSection = styled.section`
	background-image: url(${HeroImage}), linear-gradient(to top right, rgba(0,0,0,0.1), rgba(0,0,0,0.08));
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

export const HeroSectionContentContainer = styled.div`
	max-width: 1140px;	
    padding: 40px 0px 40px 0px;
`;

export const HeroSectionHeader = styled.header`
    gap: 30px;
    margin-bottom: 30px;

    @media (max-width: 767px) {
        gap: 15px;
    }
`;

export const HeroSectionHeaderMainText = styled.h2`
    font-family: "Josefin Sans", sans-serif;
    font-size: 80px;
    color: white;
    letter-spacing: -.02rem;
    line-height: 1.1;
    text-align: center;

    @media (max-width: 767px) {
        font-size: 60px;
    }

    @media (max-width: 500px) {
        font-size: 42px;
    }
`;

export const HeroSectionHeaderSubText = styled.p`
    text-align: center;
    color: #ffffff;
    font-family: "Josefin Sans", Sans-serif;
    font-weight: 300;
    text-transform: uppercase;
`;

export const HeroForm = styled.form`
    @media (max-width: 767px) {
        padding: 0 2rem;
    }
`;

export const HeroFormContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: .8rem;
    margin-bottom: .8rem;

    @media (max-width: 600px) {
        grid-template-columns: 1fr;
    }
`;

export const Notification = styled.blockquote`
    margin: 2rem auto;
    width: max-content;
    color: var(--color-dark);
    background: var(--white);
    padding: .8rem 1.2rem;
    gap: 1rem;

    span {
        font-size: 1rem;
    }

    @media (max-width: 767px) {
        font-size: 15px;

        span {
            font-size: 1.2rem;
        }
    }
`