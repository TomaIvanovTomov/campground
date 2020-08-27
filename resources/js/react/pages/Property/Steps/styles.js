import styled, {css} from 'styled-components';

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0 0 50px 0;

    @media (max-width: 720px) {
        flex-direction: column;
    }
`;

export const Step = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 23%;
    padding: 30px;
    background-color: #eaeaea;
    color: var(--primary);

    @media (max-width: 1350px) {
        width: 24%;
        padding: 20px;
        min-height: 121px;
    }

    @media (max-width: 720px) {
        width: 100%;
        min-height: unset;
        margin-bottom: 20px;
    }

    ${props => props.completed && css `
        background-color: var(--secondary) !important;
        color: white !important;

        svg {
            display: block !important;
        }
    `}

    ${props => props.active && css `
        background-color: var(--primary) !important;
        color: white !important;
    `}

    section {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: column;
        width: 80%;

        @media (max-width: 1600px) {
            width: 100%;
        }

        p {
            font-weight: 200;
            font-size: 20px;
        }

        h1 {
            font-weight: 400;
            font-size: 20px;
        }
    }

    svg {
        font-size: 20px;
        display: none;
    }
`;