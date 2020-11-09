import styled, {css} from 'styled-components';

export const Content = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;
    margin: 0 auto;
    max-width: 1600px;
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin: 40px 0;
    color: var(--primary);

    section {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 75%;

        div {
            display: flex;
            align-items: center;
            justify-content: space-between;

            h2 {
                :first-of-type {
                    margin: 0 20px 0 0;
                }

                :last-of-type {
                    margin: 0 0 0 20px;
                }
            }
        }
    }
`;