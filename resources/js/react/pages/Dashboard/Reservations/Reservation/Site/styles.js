import styled, {css} from 'styled-components';

export const Content = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    color: var(--primary);
    background-color: var(--tertiary);
    padding: 30px;
    border-radius: 8px;
    margin: 0 0 40px 0;

    h2 {
        font-weight: 800;
        font-size: 20px;
    }
`;

export const SiteInfo = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    
    div {
        width: 30%;
        margin: 30px 0 0;
        display: flex;
        flex-direction: column;
        
        img {
            max-width: 100%;
        }

        section {
            display: flex;
            align-items: center;
            margin: 15px 0 0;

            svg {
                font-size: 25px;
            }

            p {
                font-weight: 600;
                font-size: 20px;
                margin: 0 20px 0 5px;
            }
        }

        &:last-of-type {
            width: 65%;
        }

        table {
            width: 100%;
            border-spacing: 0 10px;

            tr {
                
                th {
                    text-align: left;
                    text-transform: uppercase;
                    border-bottom: 1px solid #a7a7a7;
                    padding: 0 0 10px;
                    
                    &:last-of-type {
                        text-align: right !important;
                    }
                }

                td {
                    text-align: left;                    
                    border-bottom: 1px solid #a7a7a7;
                    padding: 0 0 10px;

                    &:last-of-type {
                        text-align: right !important;
                    }
                }
            }
        }
    }
`;

export const Prices = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
    width: 100% !important;
    margin: 20px 0 0 !important;
`;

export const Price = styled.div`
    display: flex;
    align-items: flex-end;
    width: 100%;
    justify-content: flex-end;
    flex-direction: row !important;
    width: 100% !important;
    margin: 0 0 3px 0 !important;

    ${props => props.total && css `
        margin: 10px 0 0 0 !important;
        font-size: 25px;
    `}

    h4 {        
        font-weight: 400;
    }

    p {        
        font-weight: 800;
        margin: 0 0 0 20px;
    }
`;