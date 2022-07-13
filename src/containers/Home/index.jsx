import React from 'react';
import { Section, P, Input } from './styles';
import MainContainer from '../../components/MainContainer';
import Image from '../../components/Image';
import Title from '../../components/Title';
import Button from '../../components/Button';

const Home = () => {
    return (
        <MainContainer>
            <Image alt="CodeBurger Logo Image" />
            <Section>
                <Title>Faça seu pedido!</Title>
                <div>
                    <P>Pedido</P>
                    <Input placeholder="1 Coca-Cola, 1-X Salada" />
                </div>
                <div>
                    <P>Nome do Cliente</P>
                    <Input placeholder="Lucas" />
                </div>
                <Button>Pedir</Button>
            </Section>
        </MainContainer>
    );
};

export default Home;
