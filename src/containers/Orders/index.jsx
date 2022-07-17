import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { Section, OrdersList, Order } from './styles';
import MainContainer from '../../components/MainContainer';
import Image from '../../components/Image';
import Title from '../../components/Title';
import Button from '../../components/Button';
import 'boxicons';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            const { data: ordersData } = await axios.get('http://localhost:3001/order');
            setOrders(ordersData);
        })();
    }, []);

    const deleteOrder = async id => {
        await axios.delete(`http://localhost:3001/order/${id}`);

        const newOrders = orders.filter(order => order.id !== id);
        setOrders(newOrders);
    };

    return (
        <MainContainer>
            <Image img2={true} alt="CodeBurger Package" />
            <Section>
                <Title>Pedidos</Title>
                <OrdersList>
                    {orders.map(order => {
                        let state = {};
                        if (order.status !== 'Pronto') {
                            // preparation state
                            state = {
                                name: 'loader-alt',
                                animation: 'spin',
                                color: '#f14a3d'
                            };

                            setTimeout(async () => {
                                await axios.patch(`http://localhost:3001/order/${order.id}`);

                                const { data: ordersData } = await axios.get('http://localhost:3001/order');
                                setOrders(ordersData);
                            }, Math.floor(Math.random() * (40 - 5) + 5) * 1000); // preparation time
                        } else {
                            // done state
                            state = {
                                name: 'package',
                                animation: 'tada-hover',
                                color: '#855434',
                                onClick: () => deleteOrder(order.id),
                                style: { cursor: 'pointer' }
                            };
                        }

                        return (
                            <Order key={order.id}>
                                <div>
                                    <h2>{order.order}</h2>
                                    <p>— {order.clienteName}</p>
                                    <b>
                                        R$ <span>{order.price}</span>
                                    </b>
                                </div>
                                <box-icon {...state}></box-icon>
                            </Order>
                        );
                    })}
                </OrdersList>
                <Button btn2={true} onClick={() => navigate('/')}>
                    <p>Voltar</p>
                    <box-icon name="chevrons-left" type="solid" animation="flashing" color="#eeeeee"></box-icon>
                </Button>
            </Section>
        </MainContainer>
    );
};

export default Orders;

/*
    <UseAnimations animation={archive} size={56} wrapperStyle={{ cursor: 'pointer', position: 'absolute', top: '-28px', right: '-10px' }} strokeColor="#f14a3d" onClick={() => deleteOrder(order.id)} />
*/
