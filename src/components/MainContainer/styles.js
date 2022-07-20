import styled from 'styled-components';

export const MainContainer = styled.main`
    background: #0a0a10;
    padding: 20px;
    min-height: 100vh;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 50px;
    justify-content: center;
    align-items: center;
    max-width: 1000px;
    margin: auto;

    @media (min-width: 660px) {
        justify-content: space-around;
    }
`;
