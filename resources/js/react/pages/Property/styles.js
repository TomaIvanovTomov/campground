import styled, {css} from 'styled-components';

export const Content = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;
    margin: 50px auto;
    max-width: 1600px;
    
    @media (max-width: 1650px) {
        width: 90%;
    }
`;

export const Header = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    width: 100%;
    margin: 40px 0;

    @media (max-width: 1300px) {
        flex-direction: column;
        align-items: flex-start;

        button {
            margin: 20px 0;
        }
    }

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

    @media (max-width: 1300px) {
        width: 100%;

        div {
            section {
                :first-of-type {
                    width: 50% !important;
                }
            }
        }
    }

    @media (max-width: 800px) {
        div {
            :last-child {
                flex-direction: column;
                align-items: flex-start;

                section {
                    margin: 10px 0;
                }
            }
        }
    }
    
    div {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin: 10px 0 0 0;
        width: 100%;

        h2 {
            color: var(--primary);
            font-size: 25px;
            font-weight: 600;
            margin-right: 10px;
        }

        section {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            color: var(--secondary);
            width: 30%;
            margin: 0 20px 0 0;
            
            svg {
                margin: 0 5px 0 0;
                font-size: 18px;
            }
        }
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

    @media (max-width: 1300px) {
        flex-direction: column;
    }
`;

export const PropertyContent = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    width: 75%;

    @media (max-width: 1300px) {
        width: 100%;
        margin: 0 0 20px 0;
    }
`;

export const Sidebar = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    width: 23%;

    @media (max-width: 1300px) {
        width: 100%;
    }
`;

export const PropertyInfoHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    margin: 50px 0 0 0;
    padding: 0 0 0 30px;
`;

export const PropertyInfoHeaderTitle = styled.h2`
    font-weight: 200;
    color: var(--primary);
    font-size: 18px;
    cursor: pointer;
    margin: 0 40px 0 0;

    ${props => props.selected && css `
        font-weight: 600;
        border-bottom: 2px solid var(--secondary);
    `}
`;

