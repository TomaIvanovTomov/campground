import styled from 'styled-components';

export const Content = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;
    margin: 0 auto 50px;
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