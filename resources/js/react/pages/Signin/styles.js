import styled from 'styled-components';

import campground from '../../assets/campground.jpg';

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    @media (max-width: 1050px) {
        flex-direction: column;
    }
`;

export const Form = styled.div`
    display: flex;
    align-items: left;
    justify-content: left;
    width: 50%;    
    padding: 90px;

    @media (max-width: 1050px) {
        width: 100%;
    }
`;

export const Banner = styled.div`
    display: flex;
    align-items: left;
    justify-content: center;
    flex-direction: column;
    width: 50%;
    background-image: url(${campground});
    background-size: cover;
    background-position: bottom;
    background-repeat: no-repeat;    
    text-align: left;
    padding: 320px 60px 60px 90px;
    min-height: 1215px;

    @media (max-width: 1050px) {
        width: 100%;
        padding: 60px !important;
        min-height: unset;
    }

    h1 {
        color: white;
        font-weight: 300;
        font-size: 35px;
        margin-bottom: 40px;
    }

    p {
        color: white;
        font-weight: 300;
        font-size: 21px;
    }

    ul {
        color: white;
        font-weight: 300;
        font-size: 21px;
        padding: 20px 0;
        width: 60%;

        li {
            margin: 50px 0;
        }
    }
`;