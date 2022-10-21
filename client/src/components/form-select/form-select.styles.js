import styled from 'styled-components';

export const FormGroup = styled.div`
	position: relative;

	.icon {
		font-family: eicons;
	    font-size: 15px;

	    position: absolute;
	    top: 75%;
	    right: 10px;
	    transform: translate(-50%, -50%);

	    pointer-events: none;
	    text-shadow: 0 0 3px rgb(0, 0, 0, .3);

	    @media (max-width: 767px) {
	    	top: 70%;
	    	right: 5%;
	    }

	    @media (max-width: 500px) {
	    	top: 75%;
		    right: 1%;
	    }
	}
`;

export const FormSelectField = styled.select`
	background-color: var(--white);
	appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;

    max-width: 100%;;
	font-family: var( typography-text-font-family ), Sans-serif;
    font-weight: var( typography-text-font-weight );
    color: var(color-text);
    border: none;
    line-height: 1.2;

    color: inherit;
    font-size: inherit;
    -ms-flex-preferred-size: 100%;
    padding: 13px 15px;
    padding-right: 20px;

    &:focus {
    	outline: none;
    }
`; 