import styled, {css} from 'styled-components';

export const Content = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    padding: 20px;
    box-shadow: 1px 4px 7px -2px rgba(0,0,0,0.10);
    border-radius: 10px;
    margin: 0 0 40px 0;

    img {
        width: 210px;
        border-radius: 10px;
        margin: 0 20px 0 0;
    }
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;

    p {
        text-align: left;
        width: 80%;
        color: #bbbbbb;
        line-height: 22px;

        span {
            margin-left: 10px;

            svg {
                font-size: 16px;
                margin-left: 2px;
                color: var(--secondary);
            }
        }
    }
`;

export const Buttons = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;

    button {
        background-color: var(--secondary);
        border: none;
        color: white;
        height: unset;
        padding: 7px 15px;
        border-radius: 3px;
        margin: 0 0 0 10px;
        width: unset;

        &:last-child {
            background-color: transparent;
            border: 1px solid var(--secondary);
            color: var(--secondary);
        }
    }
`;

export const ContentDivision = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;    

    section {
        width: 50%;
    }
`;

export const Location = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    margin: 5px 0 0;  

    svg {
        color: var(--secondary);
        margin: 0 5px 0 0;
    }

    p {
        color: var(--secondary); 
    }
`;

export const Amenities = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    margin: 20px 0;

    div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: var(--primary);
        width: 100%;

        section {
            display: flex;
            align-items: center;
            justify-content: flex-start;

            svg {
                margin: 0 8px 0 0;
            }

            p {
                font-weight: 600;
                color: var(--primary);
            }
        }
    }
`;

export const Distance = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between !important;
    background-color: var(--primary);
    padding: 10px 20px;
    border-radius: 8px;
    width: 200px !important;
    margin: 20px 0;

    svg {
        margin: 0 15px 0 0 !important;
        color: white !important;
    }

    p {
        color: white !important;
    }
`;

export const Reviews = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    flex-direction: column;
    width: 100%;    

    p {
        color: var(--primary);
        width: auto !important;
        font-weight: 600;
    }
`;

export const NumberReviews = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;

    span {
        background-color: var(--secondary);
        padding: 5px 9px;
        border-radius: 50%;
        text-align: center;
        color: white;
        margin: 0 10px 0 0;
    } 

    p {
        color: var(--primary);
        width: auto !important;
        font-weight: 600;
        font-size: 20px;
    }
`;

export const Price = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    width: 100%;
    flex-direction: column;
    margin: 30px 0;

    p {
        color: var(--primary);
        width: auto !important;
        font-weight: 600;
        font-size: 16px;
    }

    span {
        font-weight: 600;
        color: #a2a2a2;
    }
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;    

    h2 {
        font-size: 20px;
        line-height: 0;
        margin: 0 50px 0 0;
        color: var(--primary) !important;
    }
`;

export const Footer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;