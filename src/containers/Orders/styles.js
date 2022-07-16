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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
`;

export const Order = styled.li`
    width: 100%;
    background: rgba(255, 255, 255, 0.25);
    padding: 10px;
    border-radius: 10px;
    color: lightgray;
    border: 2px solid #222;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    overflow: hidden;

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        width: 100%;

        h2 {
            color: #eeeeee;
            text-align: center;
            font-size: 15px;
            font-weight: 300;
            margin: 21px 10px 5px 0px;
        }

        b {
            position: absolute;
            top: 7px;
            left: 7px;
            color: green;
            font-size: 14.5px;

            span {
                font-weight: 400;
            }
        }

        p {
            color: gray;
            font-size: 14px;
            font-weight: 300;
            font-style: italic;
        }
    }
`;
