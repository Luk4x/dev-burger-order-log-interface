import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { Section, OrdersList, Order } from './styles';
import MainContainer from '../../components/MainContainer';
import Image from '../../components/Image';
import Title from '../../components/Title';
import Button from '../../components/Button';
import Socials from '../../components/Socials';
import 'boxicons';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [popoverPlacement, setPopoverPlacement] = useState('left-start');
    const [popoverHeaderBorderLeft, setPopoverHeaderBorderLeft] = useState('10px');
    const [popoverHeaderBorderRight, setPopoverHeaderBorderRight] = useState(0);
    const navigate = useNavigate();

    const orderStatusResponsiveness = () => {
        if ((window.innerWidth < 1150 && window.innerWidth > 758) || window.innerWidth < 570) {
            setPopoverPlacement('left-start');
            setPopoverHeaderBorderLeft('10px');
            setPopoverHeaderBorderRight(0);
        } else {
            setPopoverPlacement('right-start');
            setPopoverHeaderBorderLeft(0);
            setPopoverHeaderBorderRight('10px');
        }
    };

    useEffect(() => {
        (async () => {
            const { data: ordersData } = await axios.get(`${import.meta.env.VITE_BASE_URL}/order`);
            setOrders(ordersData);
        })();

        orderStatusResponsiveness();
    }, []);

    onresize = () => orderStatusResponsiveness();

    const deleteOrder = async id => {
        await axios.delete(`${import.meta.env.VITE_BASE_URL}/order/${id}`);

        const newOrders = orders.filter(order => order.id !== id);
        setOrders(newOrders);
    };

    return (
        <MainContainer>
            <Socials />
            <Image img2={true} alt="CodeBurger Package" style={{ margin: '-40px 0' }} />
            <Section>
                <Title>Pedidos</Title>
                <OrdersList>
                    {orders.map(order => {
                        let state = {};
                        let message = '';
                        if (order.status !== 'Pronto') {
                            // preparation state
                            state = {
                                name: 'loader-alt',
                                animation: 'spin',
                                color: '#f14a3d'
                            };

                            message = 'aguarde mais um pouco!';

                            setTimeout(async () => {
                                await axios.patch(`${import.meta.env.VITE_BASE_URL}/order/${order.id}`);

                                const { data: ordersData } = await axios.get(`${import.meta.env.VITE_BASE_URL}/order`);
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

                            message = 'pode levá-lo!';
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
                                <OverlayTrigger
                                    trigger={['hover', 'focus']}
                                    placement={popoverPlacement}
                                    overlay={
                                        <Popover id="popover-basic" style={{ background: 'none', width: '130px', marginLeft: '10px', border: 'none' }}>
                                            <Popover.Header as="h3" style={{ background: state.color, color: '#eeeeee', padding: '5px 10px', fontSize: '16px', fontWeight: '300', borderTopRightRadius: popoverHeaderBorderRight, borderTopLeftRadius: popoverHeaderBorderLeft }}>
                                                Ei, {order.clienteName}!
                                            </Popover.Header>
                                            <Popover.Body as="p" style={{ background: '#222', color: 'gray', borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px', padding: '5px 10px', fontSize: '14px' }}>
                                                Seu pedido está <span style={{ color: state.color }}>{order.status}</span>, {message}
                                            </Popover.Body>
                                        </Popover>
                                    }
                                >
                                    <box-icon {...state}></box-icon>
                                </OverlayTrigger>
                            </Order>
                        );
                    })}
                </OrdersList>
                <Button btn2={true} onClick={() => navigate('/')}>
                    <>Voltar</>
                    <box-icon name="chevrons-left" type="solid" animation="flashing" color="#eeeeee"></box-icon>
                </Button>
            </Section>
        </MainContainer>
    );
};

export default Orders;
