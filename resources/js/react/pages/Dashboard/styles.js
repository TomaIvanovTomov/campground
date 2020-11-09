import styled from 'styled-components';

export const Content = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;
    margin: 0 auto;
    max-width: 1600px;
`;

export const Header = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;

    p {
        color: var(--primary);
        font-size: 15px;
        margin: 0 0 10px 0;
    }

    
    h2 {
        color: var(--primary);
        font-size: 18px;
    }
`;

export const Info = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;
    padding: 30px;
    box-shadow: 8px 7px 28px -21px rgba(0,0,0,0.22);
    border-radius: 8px;

    p {
        font-size: 14px;
        line-height: 20px;
        color: var(--primary);
    }

    button {
        color: white;
        border: none;
        padding: 20px 50px;
        background-color: var(--secondary);
        font-weight: 600;
    }
`;

export const InfoSection = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    margin: 20px 0;
    width: 100%;

    :last-of-type {
        border-bottom: 1px solid rgba(0,0,0,0.22);
        padding-bottom: 50px;
        margin-bottom: 50px;
    }

    h2 {
        font-size: 18px;
        color: var(--primary);
        margin: 0 0 10px;
    }

    section {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        width: 100%;

        section {
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
            flex-direction: column;
            width: 25%;

            p {
                font-size: 15px;
                color: #b5b5b5;
                margin: 0 0 5px 0;
            }

            input {
                border: 1px solid #b5b5b5;
                padding: 16px;
                font-size: 20px;
                font-weight: 600;
                color: var(--primary);
                width: 90%;
            }
        }
    }
`;