import styled, {css} from 'styled-components';

export const Content = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    width: 95%;
    padding: 20px;
    box-shadow: 1px 4px 7px -2px rgba(0,0,0,0.10);
    border-radius: 10px;
    margin: 0 0 40px 0;

    img {
        width: 100px;
        border-radius: 10px;
        margin: 0 15px 0 0;
    }
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;

    h2 {
        font-size: 20px;
        margin: 0 0 8px 0;
        color: var(--primary) !important;
    }

    p {
        text-align: left;
        width: 80%;
        color: #bbbbbb;
        line-height: 22px;

        span {
            margin-left: 10px;

            svg {
                font-size: 16px;
                margin-left: 2px;
                color: var(--secondary);
            }
        }
    }
`;

export const Buttons = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;

    button {
        background-color: var(--secondary);
        border: none;
        color: white;
        height: unset;
        padding: 7px 15px;
        border-radius: 3px;
        margin: 0 0 0 10px;
        width: unset;

        &:last-child {
            background-color: transparent;
            border: 1px solid var(--secondary);
            color: var(--secondary);
        }
    }
`;