import React, {Component} from 'react';
import {FaChevronDown} from 'react-icons/fa';

import {Content, Menu, User} from './styles';

import Logo from '../../assets/logo.png';
import Profile from '../../assets/default.png';
import {SanctumContext} from "react-sanctum";

class Header extends Component {

    static contextType = SanctumContext;

    constructor() {
        super();

        this.state = {
        };
    }

    render() {
        return(
            <Content absolute={this.props.internal ? false : true}>
                <img src={Logo} />

                {!this.props.internal &&
                <Menu>
                    <p>Help</p>
                    <p>Contact us</p>
                    <p>Login</p>
                    <p>Signup</p>
                </Menu>
                }

                {this.props.internal &&
                <User>
                    <img src={Profile} />
                    <p>{this.context.user.first_name} {this.context.user.last_name}</p>
                    <FaChevronDown />
                </User>
                }
            </Content>
        )
    }
}

export default Header;
