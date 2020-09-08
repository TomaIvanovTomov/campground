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
                    font-size: 17px;
                }

                svg {
                    margin-right: 20px;
                    color: var(--secondary);
                }
            }
        }
    }
`;