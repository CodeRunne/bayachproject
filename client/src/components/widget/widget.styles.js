import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const WidgetContainer = styled.div`
    gap: 24px;

    @media (max-width: 500px) {
        font-size: 18px;
    } 
`;

export const WidgetLink = styled(Link)`
    font-size: 20px;

    svg {
        transition: color .2s;
    }

    &:hover {
        svg {
            color: #48bfbe;
        }
    }

    @media (max-width: 767px) {
        font-size: 17px;
    }

    @media (max-width: 500px) {
        font-size: 15px;
    } 
`;