import React from 'react';
import { Section, OrdersList, Order } from './styles';
import MainContainer from '../../components/MainContainer';
import Image from '../../components/Image';
import Title from '../../components/Title';
import Button from '../../components/Button';
import { AiFillCaretLeft } from 'react-icons/ai';

const Orders = () => {
    return (
        <MainContainer>
            <Image img2={true} alt="CodeBurger Package" />
            <Section>
                <Title>Pedidos</Title>
                <OrdersList>
                    <Order>Order</Order>
                </OrdersList>
                <Button btn2={true}>
                    <p>Voltar</p>
                    <AiFillCaretLeft />
                </Button>
            </Section>
        </MainContainer>
    );
};

export default Orders;
