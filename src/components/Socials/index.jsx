import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Dropdown from 'react-bootstrap/Dropdown';
import 'boxicons';

const Socials = () => {
    const [discordText, setDiscordText] = useState('Luk4x#5068');
    const [discordIcon, setDiscordIcon] = useState(null);

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
            link: 'https://wa.me/5522996112570?text=Yo,%20sinta-se%20livre%20para%20entrar%20em%20contato%20comigo.',
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
        <Dropdown style={{ position: 'fixed', top: '10px', right: '10px', zIndex: '1' }} drop="start">
            <Dropdown.Toggle variant="dark" id="dropdown-basic" style={{ color: '#eeeeee', background: '#2A2A30' }}>
                Socials
            </Dropdown.Toggle>
            <Dropdown.Menu variant="dark" style={{ background: '#333', marginRight: '5px' }}>
                {socials.map(social => {
                    return (
                        <Dropdown.Item key={social.name} href={social.link} target="_blank" style={{ display: 'flex', justifyContent: 'start', alignItems: 'center', gap: '8px', color: 'gray' }}>
                            <box-icon {...social.icon}></box-icon>
                            <>{social.name}</>
                        </Dropdown.Item>
                    );
                })}
                <Dropdown.Item
                    style={{ display: 'flex', justifyContent: 'start', alignItems: 'center', gap: '8px', color: 'gray' }}
                    onClick={() => {
                        navigator.clipboard.writeText('Luk4x#5068');
                    }}
                    onMouseEnter={() => {
                        setDiscordText('Copiar');
                        setDiscordIcon(<box-icon name="clipboard" color="#6b6b6b"></box-icon>);
                    }}
                    onMouseLeave={() => {
                        setDiscordText('Luk4x#5068');
                        setDiscordIcon(null);
                    }}
                >
                    <box-icon name="discord-alt" type="logo" color="#545fef"></box-icon>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '3px', color: 'gray' }}>
                        {discordText} {discordIcon}
                    </div>
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default Socials;
