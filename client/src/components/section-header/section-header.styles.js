import styled from 'styled-components';

export const SectionBodyHeader = styled.div`
	width: 100%;
	margin-bottom: 20px;
	padding: 10px 0px 10px 0px;
	background: var(--color-main);
	color: var(--white);
`;

export const SectionBodyHeaderText = styled.h2`
	font-size: 48px;
    font-family: var( --typography-primary-font-family ), sans-serif;
	font-weight: var( --typography-primary-font-weight );
	text-align: center;
	text-transform: uppercase;

	@media (max-width: 727px) {
		font-size: 32px;
	}

	@media (max-width: 500px) {
		font-size: 28px;
	}
`;	