import styled from 'styled-components';

export const ButtonElement = styled.button`
	width: ${({ type }) => type === "submit" ? 'max-content' : '100%' };
	background: ${({ type }) => type === "submit" ? 'var(--color-main)' : '#818a91' };
	color: ${({ type }) => type === "submit" ? 'var(--white)' : '#000' };
	border: none;
	outline: none;
	font-family: "Josefin Sans", Sans-serif;
    font-size: 15px;
    padding: 12px 24px;
    line-height: 1;
    border-radius: 3px;
    transition: all .3s;

    &:hover,
    &:focus {
    	cursor: pointer;
    }
`;