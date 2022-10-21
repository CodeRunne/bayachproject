import styled from 'styled-components';

export const SectionContainer = styled.section`
	margin-bottom: 20px;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 20px;

	@media (max-width: 767px) {
        grid-template-columns: 1fr;

        img {
        	order: 2;
        }

        div {
        	order: 1;
        }
    }
`;