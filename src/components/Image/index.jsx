import React from 'react';
import ImageLogo from '../../assets/burgerLogo.svg';
import ImagePackage from '../../assets/burgerPackage.svg';
import { Image as Img } from './style';

const Image = ({ img2, ...props }) => {
    return <Img src={img2 ? ImagePackage : ImageLogo} {...props} />;
};

export default Image;
