import styled, {css} from 'styled-components';

export const Content = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 600px;
    padding: 60px;
    z-index: 200;
    background-color: white;
`;

export const Form = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: space-between;
    width: 100%;

    form {
        display: flex;
        align-items: center;
        text-align: center;
        flex-wrap: wrap;
        justify-content: space-between;
        width: 100%;

        section {
            width: 100%;
            position: relative;

            p {
                color: #a0a0a0;
                font-weight: 600;
                font-size: 15px;
                text-align: left;
                margin: 0 0 10px 0;
            }            

            input {
                width: 100%;
            }

            svg {
                position: absolute;
                font-size: 20px;
                z-index: 2;
                bottom: 43%;
                left: 20px;
                color: var(--fourth) !important;

                &:last-child {
                    top: 25%;
                    left: 105%;
                }
            }
        }
    }

    input {
        height: 70px;
        margin: 0 0 30px;
        background: white;
        border: 1px solid var(--fourth);
        color: var(--primary);
        text-align: left;
        font-size: 17px;
        font-weight: 600;
        padding: 0 60px;

        &::placeholder {
            color: var(--fourth);
        }
    }

    textarea {
        height: 120px;
        width: 100%;
        margin: 0 0 30px;
        background: white;
        border: 1px solid var(--fourth);
        color: var(--primary);
        text-align: left;
        font-size: 17px;
        font-weight: 600;
        padding: 20px;
    }
`;

export const CleanInput = styled.input`
    padding: 0 20px !important;
`;

export const ContentHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin: 0 0 60px;

    button {
        border: none;
        padding: 15px 30px;
        background-color: transparent;
        border: 2px solid var(--secondary);
        color: var(--secondary);
        font-weight: 600;
    }
`;

export const HeaderTitle = styled.h2`
    font-weight: 200;
    color: var(--primary);
    font-size: 20px;
    cursor: pointer;

    ${props => props.selected && css `
        font-weight: 800;
        border-bottom: 2px solid var(--secondary);
    `}
`;

export const Results = styled.div`
    padding: 20px 0 0;
    width: 100%;
`;