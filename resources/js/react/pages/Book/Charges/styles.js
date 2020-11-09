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
    padding: 20px;

    h2 {
        color: #a2a2a2 !important;
        font-size: 15px;
        margin: 0 0 10px;
    }
`;

export const Info = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    margin: 10px 0;
    color: #a2a2a2;

    p {
        width: 50%;

        :last-of-type {
            text-align: right;
        }
    }
`;