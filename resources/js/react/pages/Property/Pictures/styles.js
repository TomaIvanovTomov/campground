import styled, {css} from 'styled-components';

export const Content = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;

    img {
        width: 100%;
    }
`;

export const List = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
`;

export const Img = styled.img`
    width: 15% !important;
    margin: 10px 10px 0 0;
    border-radius: 8px;

    ${props => props.selected && css `
        border: 5px solid var(--secondary);
    `}

    :hover {
        border: 5px solid var(--secondary);
    }
`;