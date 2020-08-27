import styled, {css} from 'styled-components';

export const Content = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    color: var(--primary);
    padding: 50px 0;
`;

export const Item = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    padding: 20px 0;
    width: 25%;

    section {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin: 5px 0 0;

        svg {
            margin: 0 5px 0 0;
        }
    }
`;