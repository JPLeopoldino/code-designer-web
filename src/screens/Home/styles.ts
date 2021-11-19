import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const MainContainer = styled.div`
    flex: 1;
    height: 100vh;
    padding: 0 15vw;
    background-color: ${colors.dark_grey};
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: -2;
`;

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

export const TitleContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Title = styled.h1`
    color: ${colors.white};
    font-weight: 900;
    font-size: 6rem;
`;

export const StyledTitle = styled.span`
    position: relative;
    padding: 0 15px;
    z-index: 1;

    &:before{
        position: absolute;
        content: '';
        width: 95%;
        height: 50%;
        
        top: 50%;
        left: 2.5%;
        z-index: -1;
        background-color: ${colors.blue};
    }
`;

export const Image = styled.img`
    width: 35vw;
    height: auto;
`;
