import styled from 'styled-components';

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 100%;
    max-width: 270px;
`;

export const OrdersList = styled.ul`
    list-style-type: none;
    width: 100%;
`;

export const Order = styled.li`
    width: 100%;
    background: rgba(255, 255, 255, 0.25);
    padding: 10px;
    border-radius: 10px;
    color: lightgray;
`;
