import styled, {css} from 'styled-components';

export const Content = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;
    margin: 0 auto;
    max-width: 1600px;
`;

export const Header = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    width: 100%;
    margin: 40px 0;

    button {
        border: 1px solid var(--secondary);
        border-radius: 8px;
        font-size: 15px;
        font-weight: 600;
        padding: 20px 50px;
        color: var(--secondary);
        background-color: unset !important;
    }
`;

export const HeaderInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 70%;

    p {
        color: var(--primary);
        font-weight: 400;
        font-size: 20px;
    }
    
    h2 {
        color: var(--primary);
        font-size: 25px;
        font-weight: 600;
        margin: 25px 0 10px;
    }
`;

export const HeaderDistance = styled.section`
    display: flex;
    align-items: flex-start;
    justify-content: space-between !important;
    background-color: var(--primary);
    color: white !important;
    padding: 10px 20px;
    border-radius: 8px;
    width: auto !important;

    svg {
        margin: 0 15px 0 0 !important;
    }
`;

export const Info = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
`;

export const PropertyContent = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    width: 75%;
`;

export const Sidebar = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    width: 23%;
`;

export const LoginSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;    
    padding: 30px;
    box-shadow: 8px 7px 28px -21px rgba(0,0,0,0.22);
    border-radius: 8px;
    margin: 20px 0;

    section {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        
        p {
            color: var(--primary) !important;
        }

        svg {
            margin: 0 10px 0 0;
            color: var(--primary) !important;
        }
    }

    p {
        color: var(--secondary);
        font-weight: 600;
    }
`;

export const FormSection = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;    
    padding: 30px;
    box-shadow: 8px 7px 28px -21px rgba(0,0,0,0.22);
    border-radius: 8px;
    margin: 20px 0;
    color: var(--primary);

    h2 {
        margin: 0 0 10px;
    }

    p {
        span {
            color: red;
        }
    }
`;

export const FormInputs = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    color: var(--primary);
    width: 100%;
    margin: 20px 0 0;

    ${props => props.half && css`
        section {
            width: 49% !important;
        }
    `}

    ${props => props.full && css`
        section {
            width: 100% !important;
        }
    `}

    section {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: column;
        width: 32%;

        h3 {
            font-size: 16px;
            font-weight: 600;

            span {
                color: red;
            }
        }

        input {
            width: 100%;
            margin: 5px 0 0 0;
            height: 40px;
            padding: 10px;
        }

        textarea {
            width: 100%;
            height: 200px;
        }
    }
`;

export const GuestSection = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;

    p {
        width: 100%;
        color: #31af31;
        font-weight: 600;
        border-bottom: 1px solid var(--primary);
        padding-bottom: 20px;
        margin-bottom: 20px;
    }
`;

export const Buttons = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    margin: 40px 0;
    padding-top: 40px;

    button {
        border: none;
        border-radius: 8px;
        font-size: 15px;
        font-weight: 600;
        padding: 20px 50px;
        color: white;
        background-color: var(--secondary);
        margin-left: 40px;

        :first-of-type {
            border: 1px solid var(--primary);
            background-color: unset !important;
            color: var(--primary);
        }
    }
`;
