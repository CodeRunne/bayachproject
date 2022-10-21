import styled, { keyframes } from 'styled-components';

const spinner = keyframes`
	0% {
		transform: rotate(0);
	} 100% {
		transform: rotate(360deg);
	}
`;

export const SpinnerContainer = styled.div`
	width: 100%;
	height: 100vh;
	background: var(--white);
`;

export const SpinnerElement = styled.span`
	width: 3rem;
	height: 3rem;
	border: 3px solid rgba(0,0,0,0.2);
	border-bottom-color: rgba(0,0,0,0.4);
	border-radius: 50%;
    transition: transform .4s ease-in;
    animation: ${spinner} .4s ease infinite;
`;