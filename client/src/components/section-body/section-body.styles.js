import styled from 'styled-components';

export const SectionBodyContent = styled.div`
	gap: 20px;

	@media (max-width: 500px) {
    	gap: 15px;
    }
`;

export const SectionBodyContentText = styled.p`
	color: var(--color-dark);
	font-size: 17px;
	font-family: var( --typography-text-font-family ), sans-serif;
    font-weight: var( --typography-text-font-weight );

    @media (max-width: 500px) {
    	font-size: 15px;
    }
`;