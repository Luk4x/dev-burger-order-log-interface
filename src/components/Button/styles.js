import styled from 'styled-components';

export const Button = styled.button`
    background: ${props => (props.btn2 ? 'rgba(255, 255, 255, 0.14);' : '#d93856')};
    width: 100%;
    border-radius: 3px;
    height: 56px;
    margin-top: 40px;
    color: whitesmoke;
    font-weight: 300;
    font-size: 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: translateY(3px);
        opacity: 0.95;
    }

    ${props =>
        props.btn2 &&
        `
        flex-direction: row-reverse;
    `}
`;
