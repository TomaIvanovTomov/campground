import styled from 'styled-components';

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    padding: 60px 180px;
    background-color: var(--primary);
`;

export const Copy = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    border-top: 1px solid #6e778c;
    padding-top: 20px;
    
    p {
        color: #6e778c;
        font-weight: 600;
    }
`;

export const Info = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin: 0 0 40px;
`;

export const Menu = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    flex-direction: column;
    width: 20%;
    color: white;

    h2 {
        margin: 0 0 40px 0;
    }

    section {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        margin: 0 0 15px 0;

        svg {
            margin: 0 10px 0 0;
        }
    }
`;

export const Logo = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    width: 40%;

    img {
        width: 150px;
        margin: 0 0 30px 0;
    }
`;

export const Download = styled.div`
display: flex;
align-items: flex-start;
justify-content: flex-start;
flex-direction: column;
width: 100%;
color: white;

    p {
        margin: 0 0 20px 0;
        font-weight: 600;
        font-size: 18px;
    }

    section {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;

        img {
            width: 200px;
            margin: 0 20px 0 0;
        }
    }
`;