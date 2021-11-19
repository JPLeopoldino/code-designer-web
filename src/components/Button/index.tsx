import React from 'react';
import * as SC from './styles';

interface ButtonProps {
    padding?: string;
}

const Button: React.FC<ButtonProps> = ({
    padding = '10px 35px',
    children
}) => {
    return (
        <SC.Container padding={padding}>
            <SC.Label>
                {children}
            </SC.Label>
        </SC.Container>
    );
}

export default Button;
