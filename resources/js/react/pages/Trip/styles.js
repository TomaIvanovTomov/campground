import styled from 'styled-components';

export const Content = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    margin: 0 auto;
    max-width: 1600px;
`;

export const ContentHeader = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    margin: 0 auto;
    width: 100%;
    margin: 20px auto;
    max-width: 1600px;

    h1 {
        color: var(--primary);
        font-size: 22px;
        margin: 30px 0 0;
    }

    section {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        margin: 10px 0 0;

        p {
            font-weight: 600;
            color: var(--primary);
            font-size: 15px;
            margin: 0 5px 0 0;
        }
    }
`;

export const Sidebar = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    width: 23%;
`;

export const TripContent = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    width: 75%;
    padding: 30px;
    box-shadow: 8px 7px 28px -21px rgba(0,0,0,0.22);
    border-radius: 8px;

    p {
        font-size: 14px;
        line-height: 20px;
        color: var(--primary);
    }
`;

export const Legs = styled.div`
    border-left: 3px solid #b3b1b1;
    padding-left: 20px;
    width: 100%;
    margin: 20px 0 0;
`;

export const Leg = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    flex-direction: column;
    margin: 0 0 20px 0;
`;

export const LegImages = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    margin: 10px 0;

    img {
        width: 48%;
        margin: 0 0 50px 0;
    }
`;


export const LegSection = styled.section`
    margin: 10px 0;
    padding-bottom: 20px;
    border-bottom: 1px solid rgba(0,0,0,0.15);

    h3 {
        color: #b5b5b5;
        margin: 0 10px 0 0;
    }

    div {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
        margin: 0 0 10px;
    }
`;

export const LegHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    h2 {
        color: var(--primary);
        font-size: 20px;
        font-weight: 600;
    }
`;

export const ImagePreview = styled.div`

    img {
        max-width: 100%;
    }

    p {
        color: var(--secondary);
        font-weight: 700;
        margin: 0 0 40px 0;
        font-size: 15px;
        cursor: pointer;
    }
`;

export const Buttons = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 40%;

    button, label {
        padding: 15px 30px;
        border: none;
        border: none;
        background-color: var(--secondary);
        color: white;
        margin: 0 0 0 20px;
        border-radius: 8px;
        font-weight: 600;

        :first-of-type {
            border: 1px solid var(--secondary);
            background-color: transparent;
            color: var(--secondary);
        }
    }
`;

export const LegInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 60%;
    margin: 20px 0;

    h3 {
        font-weight: 600;
        color: #b5b5b5;
        font-size: 15px;
    }

    div {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin: 10px 0 0 0;
        width: 100%;

        h2 {
            color: var(--primary);
            font-size: 20px;
            font-weight: 600;
            margin-right: 10px;
        }

        section {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            width: 50%;
            color: var(--secondary);

            p {
                color: var(--secondary) !important
            }

            svg {
                margin: 0 5px 0 0;
                font-size: 18px;
            }
        }
    }
`;

export const Share = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: var(--primary);
    width: 100%;
    border-radius: 10px;
    padding: 20px;

    h2 {
        color: white;
        font-size: 20px;
        font-weight: 600;
    }

    section {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 50%;
        margin: 20px auto;

        svg {
            color: var(--secondary);
            cursor: pointer;
            font-size: 30px;
        }
    }
`;
