import styled, {css} from 'styled-components';

export const Content = styled.div`
    width: 100%;

    h1 {
        font-weight: 400;
        font-size: 35px;
        color: var(--primary);
    }

    table {
        width: 100%;
        text-align: left;
        margin: 20px 0;        
        border-spacing: 0;

        tr {
            width: 100%;
            padding: 10px;            
            background-color: white;
            margin: 0 0 30px 0;

            &:first-of-type {
                background-color: unset !important;
            }

            th {
                color: var(--primary);
                font-weight: 400;
                font-size: 14px;
                width: 200px;
                text-transform: uppercase;
                padding: 20px;
                border: 1px solid #cacaca;
            }

            td {                
                padding: 20px;                
                color: var(--primary);
                font-size: 14px;
                border: 1px solid #cacaca;
                text-align: center;
                background-color: #f5f5f5;
            }
        }
    }
`;

export const IconTD = styled.td`

    svg {
        color: #72ca79;
        font-size: 22px;

        ${props => props.alert && css`
            color: #ef3d3d;
        `}
    }
`;

export const IconOverTD = styled.td`
    position: relative;

    svg {
        color: #72ca79;
        font-size: 22px;
        position: absolute;
        top: 30%;
        left: 35%;
        z-index: 1;

        ${props => props.alert && css`
            color: #ef3d3d;
        `}

        ${props => props.caution && css`
            color: #e8ea2e;
        `}
    }

    span {
        position: relative;
        z-index: 2;
    }
`;