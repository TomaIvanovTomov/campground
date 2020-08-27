import {createGlobalStyle} from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    *:focus {
        outline: 0;
    }

    html, body, #root {
        height: 100%;
    }

    :root {
        --primary: #2d364c;
        --secondary: #ff8913;
        --tertiary: #efefef;
    }

    body {
        -webkit-font-smoothing: antialiased;
    }

    body, input, button {
        font: 14px 'Open Sans', sans-serif;
    }

    a {
        text-decoration: none;
    }

    button {
        cursor: pointer;        
        transition: filter 0.3s;

            &:hover {
                filter: brightness(90%);
            }
    }

`;