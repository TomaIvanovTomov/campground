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
    ${props => !props.blockHover && css `cursor: pointer;`}

    &:hover {
        ${props => !props.blockHover && css `
            background-color: var(--tertiary);
            border-left: 6px solid var(--secondary);
            color: var(--primary) !important;
        `}
    }

    ${props => props.selected && css`
        background-color: var(--tertiary);
        border-left: 6px solid var(--secondary);
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

export const SubMenus = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    flex-direction: column;
    width: 100%;
    color: white;
`;

export const SubMenu = styled.h3`
    color: white;
    cursor: pointer;
    width: 70%;
    text-align: left;
    padding: 20px;
    margin: 10px 0 0 0;
    border-radius: 30px 0 0 30px;
    font-weight: 100;

    &:hover {
        background-color: var(--secondary);
    }

    ${props => props.selected && css`
        background-color: var(--secondary);
    `}
`;