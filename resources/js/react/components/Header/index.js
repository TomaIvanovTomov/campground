import React, {Component} from 'react';
import {FaChevronDown, FaSearch} from 'react-icons/fa';

import {Link} from 'react-router-dom';

import {Content, Menu, InternalMenu, Search, User} from './styles';

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
                <>
                    <InternalMenu>
                        <Link to="/"><p>Home</p></Link>
                        <Link to="/trips"><p>My Trips</p></Link>
                        <Link to="/results"><p>Listing</p></Link>
                    </InternalMenu>

                    <Search>
                        <FaSearch />
                        <form method="get" action="/results">
                            <input type="text" name="search" placeholder="Search" />
                        </form>
                    </Search>

                    <User>
                        <Link to="/dashboard">
                            <img src={Profile} />
                            <p>
                                {this.context.user ? this.context.user.first_name : "Guest"}
                                {this.context.user ? this.context.user.last_name : "Guest"}</p>
                            <FaChevronDown />
                        </Link>
                    </User>
                </>
                }
            </Content>
        )
    }
}

export default Header;
