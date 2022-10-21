import styled from 'styled-components';

export const FormInputField = styled.input`
	max-width: 100%;
	background-color: var(--white);
    font-size: inherit;
	font-family: var( typography-text-font-family ), Sans-serif;
    font-weight: var( typography-text-font-weight );
    color: var(color-text);
    border: none;
    padding: 13px 15px;
    line-height: 1;

    &:focus {
    	outline: none;
    }

    @media (max-width: 767px) {
        padding: 15px 15px;
        font-size: 15px;
    }
`;