import styled, {css} from 'styled-components';

export const Content = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    background-color: var(--tertiary);
    padding: 80px 40px 0;
    flex-direction: column;

    h1 {
        font-weight: 400;
        font-size: 35px;
        color: var(--primary);

        span {
            color: var(--secondary) !important;
        }
    }
`;

export const ContentHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin: 0 0 20px 0;

    button {
        background-color: var(--secondary);
        border: none;
        color: white;
        text-transform: uppercase;
        font-size: 13px;
        padding: 15px 25px;
    }
`;

export const SiteContent = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    flex-direction: column;
    background-color: white;
    padding: 40px;
    border-radius: 8px;
    border: 1px solid #cecece;
    margin: 30px 0;
`;

export const SiteHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin: 0 0 20px 0;    

    h3 {
        font-weight: 400;
        color: var(--primary);
        font-size: 25px;
    }

    div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 20%;

        section {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            width: 50%;

            p {
                color: #00a1ff;
            }

            svg {
                color: #00a1ff;
                font-size: 23px;
                margin-right: 10px;
            }
        }
    }
`;