import React, {Component} from 'react';

import {Content, Form, Banner} from './styles';

import Header from '../../components/Header';
import Signin from '../../components/Signin';
import Signup from '../../components/Signup';

class Login extends Component {
    constructor() {
        super();

        this.state = {
            signup: false
        }
    }

    render() {
        return(
            <>
                <Header />
                <Content>
                    <Form>
                        {!this.state.signup &&
                        <Signin
                            signup={() => this.setState({signup: true})}
                        />
                        }

                        {this.state.signup &&
                        <Signup
                            signin={() => this.setState({signup: false})}
                        />
                        }
                    </Form>
                    <Banner>
                        <h1>Your peace of mind is our top priority</h1>

                        <p>Here’s how we’re helping you feel confident welcoming guests:</p>

                        <ul>
                            <li>Your place, your rules – Choose your prices, policies, and rules for guests</li>
                            <li>We’ve got your back – Access to 24/7 support and guest misconduct reporting</li>
                            <li>Find your perfect match – Set requirements and criteria guests must fulfil</li>
                        </ul>
                    </Banner>
                </Content>
            </>
        )
    }
}

export default Login;
