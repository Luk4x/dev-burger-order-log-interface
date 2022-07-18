import styled from 'styled-components';

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    width: 100%;
    max-width: 270px;

    div {
        width: 100%;
        position: relative;
    }
`;

export const P = styled.p`
    color: whitesmoke;
    font-size: 17px;
    margin-left: 10px;
    margin-bottom: 2px;
`;

export const Input = styled.input`
    padding: 12px 32px 12px 12px;
    border-radius: 10px;
    background: #333;
    color: lightgray;
    width: 100%;
    height: 46px;
    font-size: 16px;
    transition: all 0.2s ease-in-out;
    border: 2px solid #111;

    &::placeholder {
        font-style: italic;
    }
`;
