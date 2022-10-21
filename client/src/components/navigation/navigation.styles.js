import styled from 'styled-components';

export const NavigationContainer = styled.nav`
    width: 100%;
    background: var(--white);
    z-index: 10;
    transition: all .4s ease;
`;

export const NavigationWrapper = styled.div`
	max-width: 1140px;
    transition: padding .2s ease;

    button {
        display: none;

        svg {
            font-size: 25px;
            color: var(--color-main);
            transition: color .2s;

            &:hover {
                color: var(--color-main-4);
            }
        }
    }

    @media (max-width: 767px) {
        & {
            padding: .7rem 2.5rem !important;
        }
        
        ul {
            display: none;
        }

        button {
            display: flex;
        }
    }
`;

export const NavigationLinkImage = styled.img`
	height: 3.4rem;
`;