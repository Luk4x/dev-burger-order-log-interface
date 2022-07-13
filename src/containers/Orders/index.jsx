import React from 'react';
import { Section, OrdersList, Order } from './styles';
import MainContainer from '../../components/MainContainer';
import Image from '../../components/Image';
import Title from '../../components/Title';
import Button from '../../components/Button';

const Orders = () => {
    return (
        <MainContainer>
            <Image img2={true} alt="CodeBurger Package" />
            <Section>
                <Title>Pedidos</Title>
                <OrdersList>
                    <Order></Order>
                </OrdersList>
            </Section>
            <Button>Voltar</Button>
        </MainContainer>
    );
};

export default Orders;
