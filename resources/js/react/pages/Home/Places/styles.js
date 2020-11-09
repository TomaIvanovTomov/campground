import styled, {css} from 'styled-components';

export const Content = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    margin: 0 0 40px 0;

    a {
        width: 30%;
    }
`;

export const Place = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    flex-direction: column;
    width: 100%;

    section {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 20px 0 0;

        p {
            color: var(--primary);
            font-size: 22px;
        }

        h2 {
            color: var(--primary);
            font-size: 22px;
            font-weight: 600;
        }

        :last-of-type {
            justify-content: flex-start;

            h2 {                
                color: var(--secondary) !important;
                margin: 0 50px 0 0;
            }

            svg {                
                color: var(--secondary);
            }
        }
    }
`;

export const Banner = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    flex-direction: column;
    width: 100%;
    background-image: url(${props => props.img});
    background-size: cover;
    height: 550px;
    border-radius: 20px;
    padding: 20px;

    h2 {
        width: 100%;
        text-align: left;
        color: white;
    }
    
    section {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin: 10px 0 0;

        svg {
            color: white !important;
            margin: 0 10px 0 0;
        }

        p {
            color: white;
            font-size: 15px;
        }
    }
`;