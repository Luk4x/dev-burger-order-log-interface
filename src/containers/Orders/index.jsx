import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { Section, OrdersList, Order } from './styles';
import MainContainer from '../../components/MainContainer';
import Image from '../../components/Image';
import Title from '../../components/Title';
import Button from '../../components/Button';
import 'boxicons';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Dropdown from 'react-bootstrap/Dropdown';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [popoverPlacement, setPopoverPlacement] = useState('left-start');
    const [popoverHeaderBorderLeft, setPopoverHeaderBorderLeft] = useState('10px');
    const [popoverHeaderBorderRight, setPopoverHeaderBorderRight] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            const { data: ordersData } = await axios.get(`${import.meta.env.VITE_BASE_URL}/order`);
            setOrders(ordersData);
        })();

        if (window.innerWidth < 570) {
            setPopoverPlacement('left-start');
            setPopoverHeaderBorderLeft('10px');
            setPopoverHeaderBorderRight(0);
        } else {
            setPopoverPlacement('right-start');
            setPopoverHeaderBorderLeft(0);
            setPopoverHeaderBorderRight('10px');
        }
    }, []);

    const deleteOrder = async id => {
        await axios.delete(`${import.meta.env.VITE_BASE_URL}/order/${id}`);

        const newOrders = orders.filter(order => order.id !== id);
        setOrders(newOrders);
    };

    onresize = () => {
        if (window.innerWidth < 570) {
            setPopoverPlacement('left-start');
            setPopoverHeaderBorderLeft('10px');
            setPopoverHeaderBorderRight(0);
        } else {
            setPopoverPlacement('right-start');
            setPopoverHeaderBorderLeft(0);
            setPopoverHeaderBorderRight('10px');
        }
    };

    const socials = [
        {
            name: 'LinkedIn',
            link: 'https://www.linkedin.com/in/lucasmacielf/',
            icon: { name: 'linkedin-square', animation: 'flashing', type: 'logo', color: '#0077b5' }
        },
        {
            name: 'Github',
            link: 'https://github.com/Luk4x',
            icon: { name: 'github', type: 'logo', color: '#F2F2F2' }
        },
        {
            name: 'WhatsApp',
            link: 'https://wa.me/5522996112570?text=Yo,%20feel%20free%20to%20contact%20me.',
            icon: { name: 'whatsapp', type: 'logo', color: '#45c655' }
        },
        {
            name: 'Telegram',
            link: 'https://t.me/lu_k4x',
            icon: { name: 'telegram', type: 'logo', color: '#25a3e1' }
        },
        {
            name: 'Instagram',
            link: 'https://www.instagram.com/lu_k4x/',
            icon: { name: 'instagram', type: 'logo', color: '#E4405F' }
        }
    ];

    return (
        <MainContainer>
            <Dropdown style={{ position: 'fixed', top: '10px', right: '10px' }} drop="start">
                <Dropdown.Toggle variant="dark" id="dropdown-basic" style={{ color: '#eeeeee', background: '#2A2A30' }}>
                    Socials
                </Dropdown.Toggle>
                <Dropdown.Menu variant="dark" style={{ background: '#333', marginRight: '5px' }}>
                    {socials.map(social => {
                        return (
                            <Dropdown.Item href={social.link} target="_blank" style={{ display: 'flex', justifyContent: 'start', alignItems: 'center', gap: '8px', color: 'gray' }}>
                                <box-icon {...social.icon}></box-icon>
                                <>{social.name}</>
                            </Dropdown.Item>
                        );
                    })}
                </Dropdown.Menu>
            </Dropdown>
            <Image img2={true} alt="CodeBurger Package" />
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
