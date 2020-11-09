import styled, {css} from 'styled-components';

export const Content = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;    
    margin: 0 0 40px 0;
`;

export const Guest = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 30%;
    padding: 40px;    
    border-radius: 8px;
    box-shadow: 8px 7px 28px -21px rgba(0,0,0,0.22);

    h2 {
        color: var(--primary);
        margin: 20px 0;
        text-align: center;
    }

    p {
        color: var(--primary);
        width: 90%;
        text-align: center;
        font-size: 18px;
    }
`;

export const GuestAvatar = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-image: url(${props => props.img});
    background-size: cover;
`;