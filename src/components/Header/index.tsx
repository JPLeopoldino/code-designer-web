import React from 'react';
import * as SC from './styles';

import Button from '../Button';

const Header: React.FC = () => {
    return (
        <SC.Container>
            <SC.Title>Dot. Studio</SC.Title>
            <SC.ButtonContainer>
                <Button>Contact</Button>
                <Button
                    padding="10px 15px"
                >≡</Button>
            </SC.ButtonContainer>
        </SC.Container>
    );
}

export default Header;
