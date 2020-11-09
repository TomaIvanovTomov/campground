import styled from 'styled-components';

export const Content = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 200;
    margin: 0;
    padding: 0;
    background-color: #000000c2;
`;

export const Modal = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: white;
    border-radius: 10px;
    padding: 40px;

    section {
        margin: 40px 0 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 130px;

        :last-of-type {
            width: 80%;
        }

        svg {
            font-size: 20px;
            cursor: pointer;
        }        

        a {
            button {
                border: none;
                background-color: var(--secondary);
                color: white;
            }
        }

        button {
            font-weight: 200;
            width: 100%;
            padding: 10px 30px;
            border-radius: 8px;
            background-color: white;
            border: 1px solid var(--secondary);
            color: var(--secondary);
        }
    }

    div {
        width: 300px;
        margin: 20px 0;

        p {
            margin: 0 0 10px;
        }

        textarea {
            width: 100%;
            height: 100px;
            padding: 10px;
            font: 14px 'Roboto', sans-serif;

            &::placeholder {
                
            }
        }
    }
`;