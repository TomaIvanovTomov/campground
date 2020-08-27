import styled, {css} from 'styled-components';

export const Content = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    background-color: var(--tertiary);
    padding: 80px 40px;
    flex-direction: column;

    h1 {
        font-weight: 400;
        font-size: 35px;
        color: var(--primary);
    }
`;

export const Reservations = styled.section`
    display: flex;
    margin: 50px 0 0 0;
    justify-content: flex-start;
    align-items: flex-end;
    width: 100%;

    h2 {
        font-weight: 400;
        font-size: 25px;
        color: var(--primary);
    }

    p {
        margin: 0 0 0 50px;
        color: #35a2ff;
        font-size: 21px;
        cursor: pointer;
    }
`;

export const GraphArea = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    background-color: white;
    padding: 40px;
    flex-direction: column;
    border-radius: 8px;
    border: 1px solid #cecece;
    margin: 50px 0 40px;

    h2 {
        font-weight: 400;
        font-size: 25px;
        color: var(--primary);
    }
`;

export const MonthInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

export const Info = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 23%;
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    border: 1px solid #cecece;

    svg {
        width: 30%;
        font-size: 40px;
        color: var(--secondary);
    }

    section {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        width: 60%;

        h3 {
            font-weight: 700;
            font-size: 25px;
            color: var(--primary);
        }

        p {
            font-weight: 200;
            font-size: 18px;
            color: var(--primary);
        }
    }
`;