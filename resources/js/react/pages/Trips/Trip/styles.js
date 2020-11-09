import styled from 'styled-components';

export const Content = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;    
    padding: 30px;
    box-shadow: 8px 7px 28px -21px rgba(0,0,0,0.22);
    border-radius: 8px;
    margin: 20px 0 0 0;

    :hover {
        border: 1px solid var(--secondary);
    }
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    
    h2 {
        color: var(--primary);
        font-size: 20px;
        font-weight: 600;
    }
`;

export const Buttons = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;

    button {
        padding: 15px 30px;
        border: none;
        border: 1px solid var(--secondary);
        background-color: transparent;
        color: var(--secondary);
        margin: 0 0 0 20px;
        border-radius: 8px;
        font-weight: 600;

        :first-of-type {
            background-color: #e4e4e4;
            color: var(--primary);
            border: none;
        }
    }
`;

export const Info = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;
    border-bottom: 1px solid var(--primary);
    padding-bottom: 20px;

    section {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: 100%;

        p {
            width: auto;
            margin: 0;
        }

        span {
            color: var(--primary);
            font-size: 20px;
            margin: 0 10px;
        }
    }

    h3 {
        font-weight: 600;
        color: #b5b5b5;
    }

    p {
        color: #b5b5b5;
        margin: 10px 0 30px;
        width: 60%;
    }

    h2 {
        font-weight: 600;
        font-size: 18px;
        color: var(--primary);
        margin: 10px 0;
    }
`;

export const Legs = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
`;

export const LegInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 33%;
    margin: 20px 0;

    h3 {
        font-weight: 600;
        color: #b5b5b5;
        font-size: 15px;
    }
    
    div {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin: 10px 0 0 0;
        width: 100%;

        h2 {
            color: var(--primary);
            font-size: 20px;
            font-weight: 600;
            margin-right: 10px;
        }

        section {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            color: var(--secondary);
            width: 50%;
            
            svg {
                margin: 0 5px 0 0;
                font-size: 18px;
            }
        }
    }
`;