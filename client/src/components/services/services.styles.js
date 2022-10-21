import styled from 'styled-components';

export const ServicesContainer = styled.div`
	& > div {
		margin-bottom: 50px;
	}
`;

export const ServicesFeatureContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-row-gap: 70px;
	gap: 4rem;

	@media (max-width: 767px) {
		gap: 3rem;
        grid-template-columns: 1fr;
    }

    @media (max-width: 500px) {
		gap: 2rem;
    }
`; 