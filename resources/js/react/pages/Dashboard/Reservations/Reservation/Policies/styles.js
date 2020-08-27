import styled, {css} from 'styled-components';

export const Content = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    color: var(--primary);
    background-color: var(--tertiary);
    padding: 30px;
    border-radius: 8px;

    h3 {
        text-transform: uppercase;
        font-size: 15px;
    }

    ul {
        margin: 10px 0;
        padding: 0 20px;
        list-style-type: disc;
    }
`;