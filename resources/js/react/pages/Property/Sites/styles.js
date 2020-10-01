import styled, {css} from 'styled-components';

export const Content = styled.div`
    width: 100%;
    position: relative;
`;

export const Form = styled.div`
    display: flex;
    align-items: left;
    justify-content: left;
    width: 100%;
    flex-direction: column;
    text-align: center;

    button {
        color: var(--secondary);
        font-weight: 800;
        font-size: 20px;
        padding: 20px;
        border: 1px dashed;
        background-color: whitesmoke;
    }
`;

export const Items = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 50px 0;

    @media (max-width: 1150px) {
        flex-direction: column;
    }
`;

export const Site = styled.div`
    width: 49%;
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

export const Controls = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    color: var(--primary);
    float: right;

    button {
        width: 25%;
        margin: 0;
        background-color: var(--secondary);
        border-radius: 8px;
        border: none;
        padding: 20px;
        color: white;
        font-size: 25px;
    }
`;

export const Span = styled.span`
    color: var(--secondary);
    font-weight: 700;
    font-size: 18px;
    display: block;
    cursor: pointer;
    margin: 0 80px 0 0;

    ${props => props.disabled && css `
        color: grey;
        opacity: 0.7;
    `}
`;

export const AddSitesPop = styled.div`
    position: absolute;
    background-color: white;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    display: flex;
    z-index: 2000;
    top: 50%;
    left: 50%;
    padding: 40px;
    border-radius: 10px;
    transform: translate(-50%, -50%);

    h2 {
        font-weight: 200;
        font-size: 34px;
        color: #505050;
    }

    p {
        font-weight: 800;
        color: #4a4a4a;
        font-size: 17px;
        margin: 10px auto;
    }

    select {
        width: 100%;
        border: 1px solid #4a4a4a;
        height: 50px;
        margin-bottom: 10px;
        color: #2d364c;
        font-weight: 800;
        font-size: 18px;
        padding: 10px;
    }

    button {
        background-color: var(--secondary);
        font-weight: 800;
        font-size: 20px;
        padding: 20px;
        border: none;
        color: white;
        width: 100%;
    }
`;

export const NewSiteInput = styled.input`
    width: 100%;
    border: 1px solid #4a4a4a;
    height: 50px;
    margin-bottom: 10px;
    color: #2d364c;
    font-weight: 800;
    font-size: 18px;
    padding: 10px;
    display: none;

    ${props => props.display && css`
        display: block !important;
    `}
`;


