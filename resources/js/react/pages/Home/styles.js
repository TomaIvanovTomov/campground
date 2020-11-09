import styled, {css} from 'styled-components';

export const Content = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
`;

export const SectionTitle = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    align-items: flex-end;
    height: 90px;
    margin: 40px 0;

    h2 {
        color: var(--primary);
        font-weight: 600;
        font-size: 25px;
        margin-left: 30px;
        width: 270px;
    }
`;

export const SectionTitleSquares = styled.div`
    width: 80px;
    height: 80px;
    background-color: #ffae6f21;
    position: absolute;
    top: 0;

    ${props => props.second && css `
        left: 25px;
        top: 25px;
    `}
`;

export const GuestsSection = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    margin: 40px 0;
    flex-direction: column;
`;

export const AppSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;

    p {
        font-size: 18px;
        margin: 50px 0;
        line-height: 30px;
    }

    div {
        section {
            display: flex;
            align-items: center;
            justify-content: space-between;

            img {
                width: 200px;
            }
        }
    }
`;

export const SubscribeSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    padding: 40px;
    background-color: var(--secondary);
    margin: 40px 0;
    border-radius: 8px;

    h2 {
        color: white;
        font-size: 26px;
        font-weight: 600;
    }

    p {
        color: white;
        font-size: 16px;
        margin: 20px 0;
    }

    section {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 50%;
        margin: 40px 0 0;

        input {
            width: 500px;
            background-color: unset !important;
            border: 1px solid white;
            border-radius: 8px;
            padding: 10px;
            color: white;
        }

        button {
            border: none;
            background-color: white;
            color: var(--secondary);
            padding: 10px 30px;
            border-radius: 8px;
            font-weight: 600;
        }
    }
`;
