import styled, {css} from 'styled-components';

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    padding: 20px 0;

    img {
        width: 120px;
    }

    section {
        width: 35%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0 0 0 50px;

        p {
            width: unset !important;
            font-weight: 600;
            font-size: 18px;
        }

        a {

            button {
                background-color: white;
                border: none;
                padding: 10px 35px;
                color: var(--primary);
                font-weight: 600;
                border-radius: 8px;
            }
        }

    }
`;
