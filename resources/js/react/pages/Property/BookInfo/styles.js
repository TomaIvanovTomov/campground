import styled from 'styled-components';

export const Content = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;
    box-shadow: 8px 7px 28px -21px rgba(0,0,0,0.22);
    border-radius: 8px;
    margin: 0 0 20px 0;
    color: var(--primary);

    button {
        margin: 0 auto 20px;
        background-color: var(--secondary);
        border: none;
        color: white;
        font-weight: 200;
        padding: 20px 50px;
        width: 80%;
        border-radius: 8px;
    }
`;

export const Header = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;
    padding: 30px;
    background-color: #e8e8e8;
`;

export const Info = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;
    padding: 0 30px 30px;
    margin: 20px 0 0;
    color: #a2a2a2;

    h2 {
        font-weight: 600;
        font-size: 15px;
        margin: 0 0 10px 0;
    }

    div {
        display: flex;
        align-items: center;
        justify-content: flex-start;

        section {
            display: flex;
            align-items: center;
            justify-content: flex-start;

            svg {
                font-size: 20px;
                margin: 0 8px 0 0;
            }
        }
    }
`;