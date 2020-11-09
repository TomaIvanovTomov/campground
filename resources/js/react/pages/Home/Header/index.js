import React, {Component} from 'react';

import {Content, HeaderContent} from './styles';

import HeaderBG from '../../../assets/headerBG.png';

import HeaderMenu from './HeaderMenu';
import HeaderPlan from './HeaderPlan';

class Header extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Content img={HeaderBG}>
                <HeaderContent>
                    <HeaderMenu internal={this.props.internal} />

                    <h2>Your trip <span>planned</span> like<br/>you always <span>dreamed!</span></h2>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit.</p>

                    <HeaderPlan />
                </HeaderContent>
            </Content>
        )
    }
}

export default Header;
