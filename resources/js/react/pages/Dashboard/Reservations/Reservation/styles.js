import styled, {css} from 'styled-components';

export const Content = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;

    h2 {
        font-weight: 400;
        font-size: 25px;
        color: var(--primary);
    }

`;

export const Sidebar = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 25%;
    margin: 50px 0 0;
    flex-direction: column;
`;

export const SidebarItem = styled.div`
    width: 100%;
    padding: 15px 40px;
    border-radius: 8px;    
    background-color: white;
    border: 1px solid #cecece;
    margin: 0 0 30px 0;
    
    h3 {
        color: var(--primary);
        font-weight: 600;
        font-size: 13px;
        text-transform: uppercase;
        margin: 20px 0;
    }

    section {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        margin: 20px 0;
        cursor: pointer;

        svg {
            margin: 4px 8px 0 0;
            color: #35a2ff !important;
        }

        p {                
            color: #35a2ff !important;
        }
    }

    button {
        border: none;
        background-color: var(--secondary);
        color: white;
        text-transform: uppercase;
        padding: 20px 40px;
        border-radius: 8px;
        margin: 20px 0;
    }
`;

export const ReservationContent = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 72%;
    flex-direction: column;
    background-color: white;
    padding: 40px;
    border-radius: 8px;
    border: 1px solid #cecece;
    margin: 50px 0 40px;
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

export const ReservationInfo = styled.section`
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

export const Confirmed = styled.p`
    color: white !important;
    background-color: #49e03b;
    text-align: center;
    padding: 9px;
    text-transform: uppercase;
    font-weight: 400 !important;
    border-radius: 10px;
    font-size: 12px !important;
`

export const Cancelled = styled.p`
    color: white !important;
    background-color: #d22651;
    text-align: center;
    padding: 9px;
    text-transform: uppercase;
    font-weight: 400 !important;
    border-radius: 10px;
    font-size: 12px !important;
`

export const Expired = styled.p`
    color: white !important;
    background-color: #c5c5c5;
    text-align: center;
    padding: 9px;
    text-transform: uppercase;
    font-weight: 400 !important;
    border-radius: 10px;
    font-size: 12px !important;
`