import styled, {css} from 'styled-components';

export const Content = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    width: 100%;
    border: 1px solid #cecece;
    padding: 20px;
    background-color: white;
    border-radius: 8px;
    margin: 30px 0 0 0;
`;

export const Block = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    margin: 0 30px 0 0;
    flex-direction: column;

    h1 {
        font-weight: 400;
        font-size: 15px;
        margin: 0 0 15px 0;
        color: var(--primary);
    }    
`;

export const Section = styled.div`
    position: relative;

    ${props => !props.selection && css`
        svg {
            position: absolute;
            top: 18px;
            left: 15px;
            color: #cecece;
            font-size: 25px;
            z-index: 2;
        }
    `}

    input {      
        border: 1px solid #cecece;
        padding: 20px 20px 20px 50px;
        background-color: white;
        border-radius: 8px;
        width: 300px;
    }

    p {
        position: absolute;
        top: 20px;
        z-index: 3;
        left: 50px;
        color: #565656;
    }
`;

export const Button = styled.div`
    background-color: var(--primary);
    color: white;
    font-weight: 400;
    padding: 20px 50px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
`;