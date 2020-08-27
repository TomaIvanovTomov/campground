import styled, {css} from 'styled-components';

export const Content = styled.div`
    width: 100%;
`;

export const Half = styled.div`
    width: 40%;

    @media (max-width: 1600px) {
        width: 48%;
    }

    @media (max-width: 1250px) {
        width: 100%
    }
`;

export const Form = styled.div`
    display: flex;
    align-items: left;
    justify-content: left;
    width: 100%;
    flex-direction: column;
    text-align: center;

    section {
        display: flex;
        justify-content: space-between;
        align-items: center;

        @media (max-width: 900px) {
            flex-direction: column;
        }
    }

    p {
        font-weight: 300;
        font-size: 20px;
        margin: 0;
        text-align: left;
    }

    input {
        height: 60px;
        width: 100%;
        border: 1px solid #cccccc;
        border-radius: 8px;
        margin: 10px 0 40px;
        padding: 20px;
        color: var(--primary);
        font-weight: 700;
        font-size: 18px;
    }

    button {
        background-color: var(--secondary);        
        border-radius: 8px;
        border: none;
        width: 100%;
        padding: 20px;
        color: white;
        font-size: 25px;
        margin: 0 0 50px;
    }

    form {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        width: 100%;
        color: var(--primary);

        @media (max-width: 1250px) {
            flex-direction: column;
        }   
    }
`;

export const HalfInput = styled.div`
    width: 48%;
    float: left;
    position: relative;

    @media (max-width: 900px) {
        width: 100%;
    }

    ${props => props.noTitle && css `
        margin-top: 30px !important;
    `}

    ${props => props.withIcon && css `
        input {
            padding: 20px 20px 20px 80px !important;
        }

        h1 {
            position: absolute;
            bottom: 50px;
            left: 25px;
            font-size: 30px;
            color: #c1c1c1;
            border-right: 1px solid;
            padding-right: 20px;
        }
    `}
`;

export const Checkbox = styled.div`
    display: flex;
    align-items: left;
    justify-content: left;
    width: 100%;
    color: var(--primary);
    margin: 0 0 30px 0;

    input {
        width: 20px;
        height: 30px;
        margin: 0;        
        color: var(--primary);
    }

    p {
        font-weight: 300;
        font-size: 20px;
        margin: 0 0 0 10px;

        a {
            color: var(--secondary);
            font-weight: 700;
        }
    }
`;

export const Controls = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    color: var(--primary);
    margin-top: 40px;
    float: right; 

    button {
        width: 50%;
        margin: 0;
    }

    @media (max-width: 900px) {
        flex-direction: column;
    }
`;

export const Span = styled.span`
    color: var(--secondary);
    font-weight: 700;
    font-size: 18px;
    display: block;
    cursor: pointer;

    @media (max-width: 900px) {
        margin: 0 0 40px;
    }

    ${props => props.disabled && css `
        color: grey;
        opacity: 0.7;
    `}
`;

