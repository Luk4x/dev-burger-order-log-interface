import React from 'react';
import { MainContainer as Main } from './styles';

const MainContainer = ({ children }) => {
    console.log(children);
    return <Main>{children}</Main>;
};

export default MainContainer;
