import styled, {css} from 'styled-components';

export const Content = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    width: 20%;
    background-color: var(--primary);
    flex-direction: column;
    min-height: 100vh;
`;

export const Item = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    padding: 30px 10px 30px 30px;
    color: white;
    cursor: pointer;

    &:hover {
        background-color: var(--tertiary);
        border-left: 6px solid #ff5e00;
        color: var(--primary) !important;
    }

    ${props => props.selected && css`
        background-color: var(--tertiary);
        border-left: 6px solid #ff5e00;
        color: var(--primary) !important;
    `}

    svg {
        margin: 0 20px 0 0;
        font-size: 20px;
    }
    
    h2 {
        font-weight: 100;
        font-size: 17px;
    }
`;