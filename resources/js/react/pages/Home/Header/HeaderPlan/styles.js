import styled, {css} from 'styled-components';

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 900px;
    margin: 40px 0;
    padding: 20px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 8px 7px 28px -21px rgba(0,0,0,0.22);

    input {
        width: 100%;
    }

    button {
        background-color: var(--secondary);
        color: white;
        font-weight: 600;
        padding: 20px 35px;
        border: none;
        border-radius: 8px;
    }
`;