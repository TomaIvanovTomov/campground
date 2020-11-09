import React, {Component} from 'react';
import {Content} from './styles';

import {FaUser} from 'react-icons/fa'

class Guests extends Component {
    constructor() {
        super();

        this.state = {
            guests: [
                {value: 1},
                {value: 2},
                {value: 3},
                {value: 4},
                {value: 5},
            ]
        };
    }

    render() {
        return(
            <Content>
                {this.state.guests.map(guest => (
                    <FaUser key={guest.value} style={{display: `${guest.value <= this.props.guests ? `block` : `none`}`}} />
                ))}
            </Content>
        )
    }
}

export default Guests;