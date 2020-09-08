import styled, {css} from 'styled-components';

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 35px 90px;

    ${props => props.absolute && css`
        position: absolute;
    `}

    img {
        width: 160px;
    }
`;

export const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 43%;

    p {
        color: var(--tertiary);
        font-weight: 800;
        font-size: 20px;
    }
`;

export const User = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 15%;

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
