import styled, {css} from 'styled-components';

export const SiteInfo = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    background-color: var(--primary);
    padding: 30px;
    border-radius: 8px;
    color: white;
    margin: 0 0 40px 0;
    transition: filter 0.3s;

        &:hover {
            filter: brightness(90%);
        }

    @media (max-width: 1250px) {
        width: 100%;
    }
`;

export const Header = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 0 50px 0;

    h2 {
        font-weight: 600;
        font-size: 30px;
    }

    p {
        font-weight: 200;
        font-size: 30px;
        color: #bfbc4a;
    }
`;

export const Body = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
`;

export const Info = styled.div`
    width: 50%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;

    p {
        font-weight: 200;
        font-size: 20px;
    }
`;

export const Buttons = styled.div`
    width: 40%;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;

    @media (max-width: 1500px) {
        width: 25%;
    }

    @media (max-width: 1250px) {
        width: 30%;
    }

    p {
        font-weight: 600;
        font-size: 20px;
        color: var(--secondary);
        cursor: pointer;

        &:last-of-type {
            color: #ff6464 !important;
        }
    }

    input {
        border: none;
        margin: 0;
        background-color: transparent;
        border: 1px solid white;
        border-radius: 8px;
        height: 30px;
        width: 150px;
        color: white;
        padding: 10px;
    }
`;

export const SitesList = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    margin: 30px 0 0 0;
`;

export const SiteItem = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    border-radius: 8px;
    background-color: #161f35;
    margin: 10px 0 0 0;

    p {
        font-weight: 600;
        font-size: 20px;
        color: var(--secondary);
        cursor: pointer;

        &:last-of-type {
            color: #ff6464 !important;
        }
    }
`;