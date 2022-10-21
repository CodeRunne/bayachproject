import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const NavigationLink = styled(Link)`
	font-family: "Josefin Sans", sans-serif;
    font-size: 13px;
    text-transform: uppercase;
    color: #0c0c0c;
    transition: color 0.2s;

    @media (max-width: 450px) {
        font-size: 11px;
    }

    &:hover {
    	color: rgba(12,12,12,0.46);
    }
`;