import styled, {css} from 'styled-components';

export const Content = styled.div`
    display: flex;
    align-items: left;
    justify-content: left;
    width: 100%;
    flex-direction: column;
    padding: 90px;

    @media (max-width: 900px) {
        padding: 50px 30px;
    }
`;