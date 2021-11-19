import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Container = styled.div`
    width: 69vw;
    height: 20vh;
    
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
`;

export const Title = styled.p`
    color: ${colors.white};
    font-size: 2rem;
    font-weight: bold;
`;
