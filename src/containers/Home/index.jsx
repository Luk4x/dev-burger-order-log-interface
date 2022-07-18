import React, { useRef, useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import { Section, P, Input } from './styles';
import MainContainer from '../../components/MainContainer';
import Image from '../../components/Image';
import Title from '../../components/Title';
import Button from '../../components/Button';
import 'boxicons';

const Home = () => {
    const order = useRef();
    const client = useRef();
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            await axios.get(`${import.meta.env.VITE_BASE_URL}/order`); // warming up API on heroku
        })();
    }, []);

    const verifyOrder = inputOrder => {
        if (inputOrder.length > 4) return true;
        else {
            order.current.style.backgroundColor = 'rgba(255, 110, 110, 0.25)';
            return false;
        }
    };

    const verifyClient = inputClient => {
        if (inputClient.length > 2 && isNaN(inputClient)) return true;
        else {
            client.current.style.backgroundColor = 'rgba(255, 110, 110, 0.25)';
            return false;
        }
    };

    const orderRecord = async (inputOrder, inputClient) => {
        const order = inputOrder.current.value;
        const clienteName = inputClient.current.value;

        if (verifyOrder(order) && verifyClient(clienteName)) {
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/order`, { order, clienteName, price: order.length + Math.floor(Math.random() * (50 - 1) + 1) });

            if (response.status === 201) {
                navigate('/orders');
            }
        }
    };

    return (
        <MainContainer>
            <Image alt="CodeBurger Logo Image" />
            <Section>
                <Title>Faça seu pedido!</Title>
                <div>
                    <P>Pedido</P>
                    <Input
                        ref={order}
                        placeholder="1 Coca-Cola, 1 X-Salada"
                        onFocus={() => {
                            order.current.style.backgroundColor = 'rgba(255, 255, 255, 0.25)';
                        }}
                    />
                    <box-icon name="knife" color="#d93856" style={{ position: 'absolute', right: '7px', top: '38px' }}></box-icon>
                </div>
                <div>
                    <P>Nome do Cliente</P>
                    <Input
                        ref={client}
                        placeholder="Lucas"
                        onFocus={() => {
                            client.current.style.backgroundColor = 'rgba(255, 255, 255, 0.25)';
                        }}
                    />
                    <box-icon name="user" type="solid" color="#d93856" style={{ position: 'absolute', right: '7px', top: '38px' }}></box-icon>
                </div>
                <Button onClick={() => orderRecord(order, client)}>
                    <>Pedir</>
                    <box-icon name="chevrons-right" type="solid" animation="flashing" color="#eeeeee"></box-icon>
                </Button>
            </Section>
        </MainContainer>
    );
};

export default Home;
