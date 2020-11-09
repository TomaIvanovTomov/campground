import styled, {css} from 'styled-components';

export const Content = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;
    padding: 20px;
    box-shadow: 1px 4px 7px -2px rgba(0,0,0,0.10);
    border-radius: 10px;

    section {
        border-bottom: 1px solid var(--primary);
        padding: 0 0 20px 0;
        width: 100%;
        margin: 0 0 20px 0;

        :last-of-type {
            border-bottom: unset !important;
            margin: 0 !important;
            padding: 0 !important;
        }

        h2 {
            font-weight: 600;
            font-size: 18px;
            margin: 0 0 20px 0;
        }

        select {
            width: 50%;
            height: 40px;
            padding: 0 10px;
        }
    }
`;

export const Range = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 30px;
    width: 100%;

    p {
        color: white;
        font-size: 20px;
        margin-right: 10px;
        user-select: none;
    }

    .rangeslider-horizontal {
        width: 100%;
        height: 1px;
        margin-top: 26px;
        margin-right: 10px;

        @media (max-width: 630px) {
            width: 420px;
        }
    }

    .rangeslider-horizontal .rangeslider__fill {
        background-color: var(--secondary);
        height: 5px;
        margin-top: -2px;
    }

    .rangeslider, .rangeslider .rangeslider__fill {
        box-shadow: none;
    }

    .rangeslider-horizontal .rangeslider__handle:after {
        display: none;
    }

    .rangeslider .rangeslider__handle {
        box-shadow: none;
        box-shadow: none;
        background: var(--secondary);
        border: 5px solid white;
    }

    .rangeslider__handle-label {
        color: var(--secondary);
        position: absolute;
        top: -27px;
        left: -133px;
        width: 300px;
        font-size: 16px;
        text-align: center;
        user-select: none;
    }
`;

export const Checkbox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin: 0 0 10px 0;

    section {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin: 0 !important;
        padding: 0 !important;
        width: 60% !important;
        border: unset !important;
    }

    input {
        height: 20px;
        width: 20px;
        margin: 0 10px 0 0;
    }

    svg {
        color: var(--secondary);
        margin: 0 3px 0 0;
    }
`;

export const Filters = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 100%;
`;

export const FilterOption = styled.p`
    width: 45%;
    border: 1px solid #c7c7c7;
    padding: 10px;
    font-weight: 600;
    margin: 0 10px 10px 0;
    text-align: center;

    ${props => props.selected && css `
        background-color: var(--primary);
        color: white;
    `}

    :last-child {
        width: auto !important;
    }
`;

export const DateInput = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;
    position: relative;
    margin: 0 0 20px 0;

    p {
        font-weight: 200;
        color: var(--primary);
        font-size: 15px;
        margin: 0 0 5px 0;
    }

    svg {
        position: absolute;
        color: var(--primary);
        font-size: 15px;
        left: 10px;
        bottom: 15px;
        z-index: 200;
    }

    input {
        height: 30px;
        width: 100%;
        padding: 20px 20px 20px 30px;
        color: var(--primary);
        font-weight: 600;
        font-size: 15px;
    }
`;