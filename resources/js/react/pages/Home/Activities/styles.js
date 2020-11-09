import styled, {css} from 'styled-components';

export const Content = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;    
    margin: 0 0 40px 0;
`;

export const Step = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    width: 30%;
    padding: 40px;
    border: 1px solid #2d364c26;

    svg {
        font-size: 50px;
        border: 1px solid #2d364c26;
        padding: 10px;
        border-radius: 8px;
        color: var(--secondary);
    }

    h2 {
        color: var(--primary);
        margin: 20px 0;
    }

    p {
        color: var(--primary);
        width: 60%;
    }
`;