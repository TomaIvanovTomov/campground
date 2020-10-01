import styled, {css} from 'styled-components';

export const Content = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    background-color: var(--tertiary);
    padding: 80px 40px 0;
    flex-direction: column;

    h1 {
        font-weight: 400;
        font-size: 35px;
        color: var(--primary);

        span {
            color: var(--secondary) !important;
        }
    }
`;

export const Main = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
`;

export const MainProperty = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    width: 60%;
    flex-direction: column;
`;

export const MainSidebar = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    width: 35%;
    flex-direction: column;
`;

export const PropertyContent = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    flex-direction: column;
    background-color: white;
    padding: 40px;
    border-radius: 8px;
    border: 1px solid #cecece;
    margin: 30px 0;

    img {
        width: 100%;
    }

    p {
        line-height: 24px;
    }

    h3 {
        font-weight: 100;
        color: var(--primary);
        font-size: 20px;
    }
`;

export const PropertyHeader = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    margin: 0 0 20px 0;

    section {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
        margin: 0 0 5px 0;

        h2 {
            margin-right: 20px;
        }

        svg {
            color: #00a1ff;
        }

        p {
            color: #00a1ff;
            margin-left: 10px;
        }
    }
`;

export const PropertyContact = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin: 10px 0 20px;

    section {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: #a7a7a7 !important;

        svg {
            margin-right: 10px;
        }
    }
`;

export const Info = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    p {
        color: var(--primary);
    }

    div {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        width: 50%;

        section {
            margin: 0 0 0 30px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            cursor: pointer;

            svg {
                margin: 0 8px 0 0;
                color: #35a2ff !important;
            }

            p {
                color: #35a2ff !important;
            }
        }
    }
`;

export const PropertyInfo = styled.section`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    width: 30%;

    div {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: column;
        width: unset !important;
        margin: 0 30px 0 0;

        p {
            color: var(--secondary) !important;
        }
    }
`;

export const SidebarHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin: 0 0 20px 0;

    button {
        background-color: var(--secondary);
        border: none;
        color: white;
        text-transform: uppercase;
        font-size: 13px;
        padding: 15px 25px;
    }
`;

export const ContentHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin: 0 0 20px 0;

    button {
        background-color: var(--secondary);
        border: none;
        color: white;
        text-transform: uppercase;
        font-size: 13px;
        padding: 15px 25px;
    }
`;
