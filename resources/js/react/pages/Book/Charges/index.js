import React, {Component} from 'react';

import {Content, Info} from './styles';

import { FaCalendarAlt, FaCaravan, FaUser } from 'react-icons/fa';

class Charges extends Component {

    render() {
        return(
            <Content>
                <h2>Excluded charges</h2>

                <Info>
                    <p>VAT<br />(5% of VAT)</p>
                    <p>$10</p>
                </Info>

                <Info>
                    <p>Municipality Tax<br />(7% of Municipality Tax)</p>
                    <p>$10</p>
                </Info>

                <Info>
                    <p>Service Charges</p>
                    <p>$10</p>
                </Info>
            </Content>
        )
    }
}

export default Charges;