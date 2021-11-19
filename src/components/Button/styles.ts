import styled, {css} from 'styled-components';
import { colors } from '../../styles/colors';

interface ContainerProps {
    padding?: string;
}

export const Container = styled.button<ContainerProps>`
    background: transparent;
    outline: none;
    border: 1px solid rgba(235, 236, 242, .3);
    border-radius: 40px;
    cursor: pointer;
    transition: 0.4s ease;
    
    ${props =>
        css`
            padding: ${props.padding};
        `
    };

    &:hover{
        background: rgba(235, 236, 242, .1);
    }

    &:active{
        background: rgba(235, 236, 242, .25);
    }
`;

export const Label = styled.p`
    color: ${colors.white};
    font-size: 14px;
    font-weight: 500;
`;
