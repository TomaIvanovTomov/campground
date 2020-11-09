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

    p {
        font-size: 14px;
        line-height: 20px;
        color: var(--primary);
    }

    section {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin: 0 40px 0 0;

        svg {
            margin: 0 8px 0 0;
        }
    }
`;

export const Amenities = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;
    border-top: 1px solid #bbbbbb;
    border-bottom: 1px solid #bbbbbb;
    margin: 20px 0;
    padding: 20px 0;

    h2 {
        font-weight: 600;
        font-size: 15px;
        color: var(--primary);
        margin: 0 0 20px 0;
    }

    div {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        color: var(--primary);

        @media (max-width: 600px) {
            flex-direction: column;
            align-items: flex-start;

            section {
                margin: 0 0 10px 0 !important;
            }
        }

        section {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            margin: 0 40px 0 0;

            svg {
                margin: 0 8px 0 0;
            }
        }
    }
`;