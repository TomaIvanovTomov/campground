import styled, {css} from 'styled-components';

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 20px 0;
    background-image: url(${props => props.img});
    background-size: cover;
    margin: 0 0 50px 0;
`;

export const HeaderContent = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;

    h2 {
        color: var(--primary);
        font-size: 50px;
        margin: 60px 0 30px;

        span {
            color: var(--secondary);
        }
    }

    p {
        font-size: 22px;
        width: 500px;
        color: var(--primary);
    }
`;