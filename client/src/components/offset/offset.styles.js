import styled from 'styled-components';

export const OffsetContainer = styled.aside`
	position: fixed;
	top: 0;

	width: 100vw;
	height: 100vh;

	background: var(--white);
	z-index: 50;
	will-change: right;
	transition: right .4s ease;
`;

export const OffsetHeader = styled.header`
	padding: 1rem;
	background: var(--color-main);
	position: relative;
`; 

export const OffsetLinkItems = styled.ul`
	width: 100%;
	margin-top: 4rem;
`;