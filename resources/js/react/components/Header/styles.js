import styled, {css} from 'styled-components';

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 20px 90px;
    box-shadow: 0px 3px 5px -2px rgba(0,0,0,0.37);
    position: relative;
    z-index: 300;

    ${props => props.absolute && css`
        position: absolute;
    `}

    img {
        width: 120px;
    }
`;

export const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 43%;

    p {
        color: var(--tertiary);
        font-weight: 600;
        font-size: 20px;
    }
`;

export const InternalMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 30%;

    p {
        color: var(--primary);
        font-weight: 600;
        font-size: 15px;
    }
`;

export const Search = styled.div`
    position: relative;

    input {
        padding: 15px;
        border: 1px solid #b5b5b5;
        padding-left: 40px;
    }

    svg {
        color: var(--secondary);
        position: absolute;
        top: 17px;
        left: 15px;
    }
`;

export const User = styled.div`
    width: 15%;

    a {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
    }

    p {
        color: var(--primary);
        font-weight: 600;
        font-size: 20px;
    }
`;
