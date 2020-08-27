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
        border-spacing: 0 25px;

        tr {
            width: 100%;
            padding: 20px;            
            background-color: white;
            margin: 0 0 30px 0;

            &:first-of-type {
                background-color: unset !important;
            }

            th {
                color: var(--primary);
                font-weight: 400;
                font-size: 20px;
                text-transform: uppercase;
                padding: 20px;
            }

            td {                
                padding: 20px;                
                color: var(--primary);
                font-size: 17px;

                h2 {
                    font-weight: 700;
                    font-size: 17px;
                    margin: 0 0 5px 0;
                }

                p {
                    font-weight: 700;
                    font-size: 17px;
                    color: #35a2ff;
                }
            }
        }
    }
`;

export const Confirmed = styled.p`
    color: white !important;
    background-color: #49e03b;
    text-align: center;
    padding: 9px;
    text-transform: uppercase;
    font-weight: 400 !important;
    border-radius: 10px;
    font-size: 12px !important;
`

export const Cancelled = styled.p`
    color: white !important;
    background-color: #d22651;
    text-align: center;
    padding: 9px;
    text-transform: uppercase;
    font-weight: 400 !important;
    border-radius: 10px;
    font-size: 12px !important;
`

export const Expired = styled.p`
    color: white !important;
    background-color: #c5c5c5;
    text-align: center;
    padding: 9px;
    text-transform: uppercase;
    font-weight: 400 !important;
    border-radius: 10px;
    font-size: 12px !important;
`