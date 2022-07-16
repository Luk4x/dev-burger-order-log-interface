import React from 'react';
import { Button as Btn } from './styles';

const Button = ({ children, ...props }) => {
    console.log(props);
    return <Btn {...props}>{children}</Btn>;
};

export default Button;
