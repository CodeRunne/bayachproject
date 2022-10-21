import styled from 'styled-components';

export const HeaderInfoContainer = styled.div`
	background: var(--color-main);
	padding: .15rem;
`;	

export const HeaderInfoContentContainer = styled.div`
	max-width: 1140px;
	color: var(--white);

	display: grid;
    grid-template-columns: repeat(2, .5fr);
    align-items: center;

	@media (max-width: 767px) {
        grid-template-columns: 1fr;
        justify-items: center;
    	grid-row-gap: 0.3rem;
    }
`;
export const HeaderInfoContent = styled.div`
	gap: .9rem;

	a {
		gap: 5px;
	}
`;

export const HeaderInfoIcons = styled.div`
	justify-content: flex-end;
	gap: .97rem;
`;