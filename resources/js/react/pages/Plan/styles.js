import styled, {css} from 'styled-components';

export const Content = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 650px;
    padding: 60px;
    z-index: 200;
    background-color: white;

    @media (max-width: 1350px) {
        position: relative;
        width: 90%;
        margin: 50px auto;
        padding: 0;
    }
`;

export const Form = styled.div`
    padding: 0 25px 0 0;
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
        padding: 0 30px 0 0;

        section {
            width: 100%;
            position: relative;
            margin: 0 0 30px;

            p {
                color: #a0a0a0;
                font-weight: 600;
                font-size: 15px;
                text-align: left;
                margin: 0 0 10px 0;
            }

            .select-input {
                input {
                    margin: 0 !important;
                }
            }

            .react-datepicker-wrapper {
                display: inline-block;
                padding: 0;
                border: 0;
                width: 100%;
                box-shadow: unset !important;

                button {
                    background-color: unset !important;
                }
            }

            .react-datepicker__tab-loop {
                z-index: 3;
                display: block;
                position: relative;
                top: -130px;
                left: 10px;
            }

            .react-datepicker__navigation--next {
                margin: unset;
                background: none;
                line-height: 1.7rem;
                text-align: center;
                cursor: pointer;
                position: absolute;
                top: 10px;
                padding: 0;
                border: 0.45rem solid transparent;
                z-index: 1;
                height: 10px;
                width: 10px;
                text-indent: -999em;
                overflow: hidden;
                border-left-color: #ccc !important;
            }

            .react-datepicker__navigation--previous {
                margin: unset;
                background: none;
                line-height: 1.7rem;
                text-align: center;
                cursor: pointer;
                position: absolute;
                top: 10px;
                padding: 0;
                border: 0.45rem solid transparent;
                z-index: 1;
                height: 10px;
                width: 10px;
                text-indent: -999em;
                overflow: hidden;
                border-right-color: #ccc !important;
            }

            input {
                width: 100%;
            }

            svg {
                position: absolute;
                font-size: 20px;
                z-index: 2;
                top: 55px;
                left: 20px;
                color: var(--fourth);
            }
        }
    }

    input {
        height: 70px;
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

    button {
        background-color: var(--secondary);
        border: none;
        color: white;
        width: 100%;
        height: 60px;
        margin: 0 0 30px;
        transition: filter 0.3s;

            &:hover {
                filter: brightness(90%);
            }
    }
`;

export const Leg = styled.section`
    width: 100%;

    ${props => props.half && css`
        width: 48% !important;
    `}

    svg {
        color: var(--fourth) !important;
    }
`;

export const LegControls = styled.div`
    width: 40px;
    position: absolute;
    display: flex;
    align-items: center;
    flex-direction: column;
    top: 30px;
    right: -45px;

    svg {
        position: relative !important;
        font-size: 30px !important;
        top: unset !important;
        left: unset !important;
        color: var(--secondary) !important;
        margin: 0 0 10px 0;
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

    @media (max-width: 500px) {
        width: 90%;
        flex-direction: column;
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

    @media (max-width: 500px) {
        margin: 0 0 20px 0;
    }
`;

export const Results = styled.div`
    padding: 20px 0 0;
    width: 100%;
`;
