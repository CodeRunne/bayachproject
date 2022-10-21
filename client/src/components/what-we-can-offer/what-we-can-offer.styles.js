import styled from 'styled-components';

export const OffersContent = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 20px;

	 @media (max-width: 767px) {
        grid-template-columns: 1fr;
    	
    	.section__body {
    		order: 2;
    	}

    	figure {
    		order: 1;
    	}
    }
`;