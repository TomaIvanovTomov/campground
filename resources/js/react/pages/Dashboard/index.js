import React, {Component} from 'react';

import {Content, Header, Info, InfoSection} from './styles';

import Select from 'react-select'
import selectStyles from './selectInputStyles';

import InputMask from 'react-input-mask';

import PageHeader from '../../components/Header';
import PageFooter from '../../components/Footer';
import {SanctumContext} from "react-sanctum";
import {toast} from "react-toastify";

class Dashboard extends Component {

    static contextType = SanctumContext;

    constructor() {
        super();

        this.state = {
            id: null,
            old_password: null,
            new_password: null,
            first_name: null,
            last_name: null,
            region: null,
            phone: null,
        }

        this.submit = this.submit.bind(this)
    }

    submit(e) {
        e.preventDefault()
        console.log(this.state)
        console.log(this.context)
        axios.post("/api/v1/update-user", {
            id: this.context.user.id,
            user: this.state
        })
        .then(response => {
            const user = response.data.user
            toast.success(response.data.message)
            if (user) {
                this.setState({
                    first_name: user.first_name,
                    last_name: user.last_name,
                    phone: user.phone,
                    region: user.region
                })
            }
        })
    }

    componentDidMount() {
        this.setState({
            first_name: this.context.user.first_name,
            last_name: this.context.user.last_name,
            phone: this.context.user.phone,
            region: this.context.user.region,
            id: this.context.user.id,
        })
    }

    render() {
        return(
            <>
            <PageHeader internal />

            <Content>
                <Header>
                    <p>Settings</p>
                    <h2>My Account</h2>
                </Header>

                <Info>
                    <form onSubmit={(e) => {this.submit(e)}}>
                        <InfoSection>
                            <section>
                                <section>
                                    <p>E-mail</p>
                                    <h2>{this.context.user.email}</h2>
                                </section>

                                <section>
                                    <p>Old password</p>
                                    <input type="password" onChange={(e) => this.setState({old_password: e.target.value})}/>
                                </section>

                                <section>
                                    <p>New password</p>
                                    <input type="password" onChange={(e) => this.setState({new_password: e.target.value})}/>
                                </section>
                            </section>
                        </InfoSection>

                        <InfoSection>
                            <h2>Profile</h2>

                            <section>
                                <section>
                                    <p>First Name*</p>
                                    <input type="text" value={this.state.first_name} onChange={(e) => this.setState({first_name: e.target.value})} />
                                </section>

                                <section>
                                    <p>Last Name*</p>
                                    <input type="text" value={this.state.last_name} onChange={(e) => this.setState({last_name: e.target.value})} />
                                </section>

                                <section>
                                    <p>Region*</p>
                                    <input type="text" value={this.state.region} onChange={(e) => this.setState({region: e.target.value})} />
                                </section>

                                <section>
                                    <p>Mobile*</p>
                                    <InputMask
                                        required mask="+999 99 999 99"
                                        value={this.state.phone}
                                        alwaysShowMask
                                        onChange={(e) => this.setState({phone: e.target.value})}
                                        maskChar="_"
                                    />
                                </section>
                            </section>
                        </InfoSection>

                        <button type="submit">Save details</button>
                    </form>
                </Info>
            </Content>
            <PageFooter />
            </>
        )
    }
}

export default Dashboard;
