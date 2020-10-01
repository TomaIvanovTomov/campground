import React, {Component} from 'react';
import InputMask from 'react-input-mask';
import message from '../../components/messages';
import { withRouter } from 'react-router-dom';

import {Content, Form, Checkbox} from './styles';

import {SanctumContext} from "react-sanctum";

class Signup extends Component {

    static contextType = SanctumContext;

    constructor(props) {
        super(props);

        this.state = {
            fname: null,
            lname: null,
            email: null,
            region: null,
            mobile: null,
            password: null,
            repeatPassword: null,
            continue: false
        }
        this.submit = this.submit.bind(this);
        this.continue = this.continue.bind(this);
    }

    componentDidMount() {
        if(this.context.authenticated){
            this.props.history.push('/dashboard');
        }
    }

    submit(e) {
        // handle submit for login
        e.preventDefault();
        if (this.validatePassword()) {
            axios.defaults.withCredentials = true;
            axios.get('/sanctum/csrf-cookie').then(response => {
                axios.post('/api/v1/register', {
                    first_name: this.state.fname,
                    last_name: this.state.lname,
                    email: this.state.email,
                    region: this.state.region,
                    phone: this.state.mobile,
                    password: this.state.password
                })
                .then(response => {
                    console.log(response)
                    if (response.status === 200) {
                        if (response.data.user) {
                            this.context.setUser(response.data.user);
                            this.props.history.push('/dashboard');
                        }
                    }
                })
                .catch(err => {
                    if(err.response.status === 422){
                        message('error', 'A user with this email address already exists.');
                    }
                });
            })
        } else {
            message('error', 'Passwords does not match.');
        }
        const data = this.state;

        //console.log(data);
    }

    continue(e) {
        // handle submit for continue registration

        e.preventDefault();
        const data = this.state.email;
    }

    validatePassword() {
        return this.state.password === this.state.repeatPassword
    }

    render() {
        return(
            <Content>
                {!this.state.continue &&
                    <>
                    <h1>Welcome</h1>

                    <p>Let's get started by listing your property</p>

                    <Form>
                        <form onSubmit={(e) => this.submit(e)}>
                            <section>
                                <div>
                                    <p>First Name*</p>
                                    <input onChange={(e) => this.setState({fname: e.target.value})} required></input>
                                </div>

                                <div>
                                    <p>Last Name*</p>
                                    <input onChange={(e) => this.setState({lname: e.target.value})} required></input>
                                </div>
                            </section>

                            <p>Email Address*</p>
                            <input onChange={(e) => this.setState({email: e.target.value})} required type="email"></input>

                            <section>
                                <div>
                                    <p>Select region*</p>
                                    <input onChange={(e) => this.setState({region: e.target.value})} required></input>
                                </div>

                                <div>
                                    <p>Mobile*</p>
                                    <InputMask
                                        onChange={(e) => this.setState({mobile: e.target.value})}
                                        required mask="+999 99 999 99"
                                        alwaysShowMask
                                        maskChar="_"
                                    />
                                </div>
                            </section>

                            <section>
                                <div>
                                    <p>Password*</p>
                                    <input onChange={(e) => this.setState({password: e.target.value})} required type="password"></input>
                                </div>

                                <div>
                                    <p>Repeat password*</p>
                                    <input onChange={(e) => this.setState({repeatPassword: e.target.value})} required type="password"></input>
                                </div>
                            </section>

                            <Checkbox>
                                <input required type="checkbox"></input>
                                <p>I accept <a href='#'>Terms & Conditions</a> and <a href='#'>Privacy Policy</a></p>
                            </Checkbox>

                            <button>Get started</button>

                            <span onClick={() => this.props.signin()}>Already have an account? Signin!</span>
                            <span onClick={() => this.setState({continue: true})}>Already started? Continue!</span>
                        </form>
                    </Form>
                    </>
                }

                {this.state.continue &&
                    <>
                    <h1>Welcome back</h1>
                    <p>Continue listing your property where you left it</p>

                    <Form>
                        <form onSubmit={(e) => this.continue(e)}>
                            <p>Email Address*</p>
                            <input onChange={(e) => this.setState({email: e.target.value})} required type="email"></input>

                            <button>Send registration link</button>

                            <span onClick={() => this.setState({continue: false})}>Go back to create account</span>
                        </form>
                    </Form>
                    </>
                }
            </Content>
        )
    }
}

export default withRouter(Signup);
