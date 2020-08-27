import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import {Content} from './styles';

import Menu from './Menu';

import Board from './Board';
import Reservations from './Reservations';
import Accounting from './Accounting';
import {SanctumContext} from "react-sanctum";

class Dashboard extends Component {

    static contextType = SanctumContext;

    constructor(props) {
        super(props);
        this.state = {
            menu: 'accounting'
        }
    }

    componentDidMount() {
        this.validate()
    }

    validate() {
        console.log(this.context)
        if (!this.context.authenticated)
            this.props.history.push('/')
    }

    render() {
        return(
            <Content>
                <Menu
                    menu={this.state.menu}
                    menuChange={(e) => this.setState({menu: e})}
                />

                {this.state.menu == 'dashboard' &&
                    <Board changeMenu={(e) => this.setState({menu: e})} />
                }

                {this.state.menu == 'reservations' &&
                    <Reservations />
                }

                {this.state.menu == 'accounting' &&
                    <Accounting />
                }
            </Content>
        )
    }
}

export default withRouter(Dashboard);
