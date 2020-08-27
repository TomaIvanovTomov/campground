import styled, {css} from 'styled-components';

export const Content = styled.div`
    display: flex;
    align-items: left;
    justify-content: left;
    width: 100%;
    flex-direction: column;
    color: var(--primary);    

    h1 {
        font-weight: 400;
        font-size: 80px;
    }

    p {
        font-weight: 300;
        font-size: 30px;
        margin: 15px 0 45px;
    }
`;

export const Form = styled.div`
    display: flex;
    align-items: left;
    justify-content: left;
    width: 100%;
    flex-direction: column;
    text-align: center;

    p {
        font-weight: 300;
        font-size: 20px;
        margin: 0;
        text-align: left;
    }

    span {
        color: var(--secondary) !important;
        font-weight: 700;
        font-size: 18px;
        text-align: center !important;
        display: block;
        margin-bottom: 20px;
        cursor: pointer;
    }

    input {
        height: 60px;
        width: 100%;
        border: 1px solid #cccccc;
        border-radius: 8px;
        margin: 10px 0 40px;
        padding: 20px;
        color: var(--primary);
        font-weight: 700;
        font-size: 18px;
    }

    button {
        background-color: var(--secondary);        
        border-radius: 8px;
        border: none;
        width: 100%;
        padding: 20px;
        color: white;
        font-size: 25px;
        margin: 0 0 50px;
    }
`;

