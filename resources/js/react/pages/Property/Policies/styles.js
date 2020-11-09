import styled from 'styled-components';

export const Content = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;
    padding: 30px;
    box-shadow: 8px 7px 28px -21px rgba(0,0,0,0.22);
    border-radius: 8px;
    margin: 20px 0 0 0;

    table {
        width: 100%;
        text-align: left;
        margin: 20px 0 0;
        border-collapse: separate;
        border-spacing: 0 15px;

        th {
            background-color: #f9f9f9;
            color: var(--primary);
            font-weight: 600;
            font-size: 15px;
            padding: 20px;            
            text-align: center;
            
            &:first-of-type {
                border-radius: 8px 0 0 8px;
                text-align: left;
            }

            &:last-of-type {
                border-radius: 0 8px 8px 0;
            }
        }

        tr {
            border: 1px solid #b1b1b1;
            border-radius: 8px;

            &:first-of-type {
                border: unset;
            }
        }

        td {            
            padding: 20px;
            border-top: 1px solid #c3c3c3;
            border-bottom: 1px solid #c3c3c3;            
            text-align: center;

            &:first-of-type {
                border-left: 1px solid #c3c3c3;
                border-radius: 8px 0 0 8px;
                text-align: left;
            }

            &:last-of-type {
                border-right: 1px solid #c3c3c3;
                border-radius: 0 8px 8px 0;
            }

            h3 {
                color: var(--primary);
                font-size: 15px;
            }

            p {
                color: #51b33f;
                font-weight: 600;
                margin-top: 3px;
            }

            svg {
                font-size: 15px;
                color: #8e8e8e;
                margin: 0 3px 0 0;
            }

            h2 {
                color: var(--primary);
                font-size: 25px;
            }

            section {
                position: relative;

                svg {
                    position: absolute;
                    z-index: 1000;
                    top: 23px;
                    right: 80px;
                    margin: 0;
                }
            }
        }
    }
`;

export const Section = styled.section`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;
    padding-bottom: 20px;
    border-bottom: 1px solid var(--primary);
    margin: 0 0 20px 0;

    h2 {
        font-weight: 600;
        color: var(--primary);
    }

    p {
        margin: 0 0 5px 0;

        span {
            font-weight: 600;
        }
    }
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    margin: 0 0 20px 0;

    h2 {
        font-weight: 600;
        color: var(--primary);
    }

    svg {
        margin: 0 5px 0 0;
    }
`;

export const Cards = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    margin: 0 0 10px 0;

    svg {
        margin: 0 10px 0 0;
        font-size: 35px;
    }
`;



