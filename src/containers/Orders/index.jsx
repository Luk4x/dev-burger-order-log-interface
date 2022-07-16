import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { Section, OrdersList, Order } from './styles';
import MainContainer from '../../components/MainContainer';
import Image from '../../components/Image';
import Title from '../../components/Title';
import Button from '../../components/Button';
import UseAnimations from 'react-useanimations';
import arrowDown from 'react-useanimations/lib/arrowDown';
import archive from 'react-useanimations/lib/archive';
import loading from 'react-useanimations/lib/loading';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();
    const [orderState, setOrderState] = useState({});

    useEffect(() => {
        (async () => {
            const { data: ordersData } = await axios.get('http://localhost:3001/order');
            setOrders(ordersData);
        })();
    }, [orderState]);

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
                            state = { animation: loading, size: 54, wrapperStyle: { position: 'absolute', top: '-25px', right: '-10px' }, strokeColor: '#f14a3d' };

                            setTimeout(async () => {
                                await axios.patch(`http://localhost:3001/order/${order.id}`);
                                setOrderState(order.id);
                            }, Math.floor(Math.random() * (30 - 5) + 5) * 1000);
                        } else {
                            state = { animation: archive, size: 56, wrapperStyle: { cursor: 'pointer', position: 'absolute', top: '-28px', right: '-10px' }, strokeColor: '#855434', onClick: () => deleteOrder(order.id) };
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
                                <UseAnimations {...state} />
                            </Order>
                        );
                    })}
                </OrdersList>
                <Button btn2={true} onClick={() => navigate('/')}>
                    <p>Voltar</p>
                    <UseAnimations animation={arrowDown} size={30} wrapperStyle={{ transform: 'rotate(90deg)' }} strokeColor="#eeeeee" />
                </Button>
            </Section>
        </MainContainer>
    );
};

export default Orders;

/*
    <UseAnimations animation={archive} size={56} wrapperStyle={{ cursor: 'pointer', position: 'absolute', top: '-28px', right: '-10px' }} strokeColor="#f14a3d" onClick={() => deleteOrder(order.id)} />
*/
