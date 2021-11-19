import React from 'react';
import * as SC from './styles';

import Header from '../../components/Header';
import image from '../../assets/code-development.png';

const Home: React.FC = () => {
    return (
        <SC.MainContainer>
            <Header />
            <SC.Container>
                <SC.TitleContainer>
                    <SC.Title>
                        Making<br/> Your
                            <SC.StyledTitle>
                                Brand
                            </SC.StyledTitle>
                        <br/>Stylish
                    </SC.Title>
                    <SC.Image src={image} />
                </SC.TitleContainer>
            </SC.Container>
        </SC.MainContainer>
    );
}

export default Home;
