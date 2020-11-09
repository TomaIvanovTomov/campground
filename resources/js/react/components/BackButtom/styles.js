import styled from 'styled-components';

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: auto;
    color: var(--primary);
    cursor: pointer;

    p {
        font-size: 20px;
        font-weight: 600;
    }

    svg {
        margin: 0 20px 0 0;
    }
`;