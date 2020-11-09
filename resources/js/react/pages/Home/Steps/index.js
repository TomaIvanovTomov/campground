import React, {Component} from 'react';

import {Content, Step} from './styles';

import {FaSuitcaseRolling, FaMapMarkedAlt, FaCaravan} from 'react-icons/fa';

class Steps extends Component {
    render() {
        return(
            <Content>
                <Step>
                    <FaSuitcaseRolling />
                    <h2>Plan your trip</h2>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Step>

                <Step>
                    <FaMapMarkedAlt />
                    <h2>Check map location</h2>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Step>

                <Step>
                    <FaCaravan />
                    <h2>Easy booking</h2>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Step>              
            </Content>
        )
    }
}

export default Steps;