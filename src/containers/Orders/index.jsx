import React, { useEffect, useState } from 'react';
import { Section, OrdersList, Order } from './styles';
import MainContainer from '../../components/MainContainer';
import Image from '../../components/Image';
import Title from '../../components/Title';
import Button from '../../components/Button';
import { AiFillCaretLeft, AiOutlineDelete } from 'react-icons/ai';
import axios from 'axios';

const Orders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        (async () => {
            const { data: ordersData } = await axios.get('http://localhost:3001/order');
            setOrders(ordersData);
        })();
    }, []);

    return (
        <MainContainer>
            <Image img2={true} alt="CodeBurger Package" />
            <Section>
                <Title>Pedidos</Title>
                <OrdersList>
                    {orders.map(order => {
                        return (
                            <Order key={order.id}>
                                <div>
                                    <h2>{order.order}</h2>
                                    <p>— {order.clienteName}</p>
                                    <b>
                                        R$ <span>{order.price}</span>
                                    </b>
                                </div>
                                <AiOutlineDelete style={{ fontSize: '25px', color: '#d93856', cursor: 'pointer' }} />
                            </Order>
                        );
                    })}
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
