import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import Logo from '../../../../assets/logo.png';

import {Content} from './styles';

class HeaderMenu extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props)
        return(
            <Content>
                <img src={Logo} />

                <section>
                    <Link to="/"><p>Home</p></Link>
                    <Link to="/"><p>Destinations</p></Link>
                    <Link to="/"><p>Trip Guides</p></Link>
                </section>

                {!this.props.internal == 1 &&
                <section>
                    <Link to="/login"><button>Log in</button></Link>
                    <Link to="/login"><button>Sign up</button></Link>
                    <Link to="/"><button>Link your property</button></Link>
                </section>
                }
            </Content>
        )
    }
}

export default HeaderMenu;
