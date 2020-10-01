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

export const AddRatePop = styled.div`
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
    width: 600px;

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
`;

export const RatePopInputs = styled.div `
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    width: 100%;
    margin: 20px 0 0;

    section {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: column;
        width: 50%;
        position: relative;
        margin: 0 0 40px 0;

        .select-input {
            input {
                padding: 20px !important;
            }
        }

        svg {
            position: absolute;
            top: 48px;
            left: 15px;
            color: #cecece;
            font-size: 25px;
            z-index: 2;
        }

        input {      
            border: 1px solid #cecece;
            padding: 20px 20px 20px 50px;
            background-color: white;
            border-radius: 8px;
            width: 100%;
        }

        p {
            position: absolute;
            top: 40px;
            z-index: 3;
            left: 50px;
            color: #565656;
            font-size: 15px;
        }

        h3 {
            text-align: left !important;
            color: var(--primary);
            font-weight: 400;
            text-transform: uppercase;
            margin: 0 0 10px 0;
        }
    }
`;

export const RatePopDays = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`

export const Day = styled.span `
    font-weight: 200;
    font-size: 12px;
    color: #c1c1c1;
    border: 1px solid #c1c1c1;
    padding: 10px 15px;
    border-radius: 8px;

    ${props => props.active && css `
        border: 1px solid var(--secondary);
        color: var(--secondary);
    `}
`

export const RatePopButton = styled.button `
    border: none;
    background-color: var(--secondary);
    width: 100%;
    margin: 20px 0 0 0;
    padding: 20px;
    color: white;
    font-weight: 600;
    font-size: 20px;
`