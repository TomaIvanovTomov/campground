import React, {Component} from 'react';

import {Content, Step} from './styles';

import {FaSnowboarding, FaBiking, FaKiwiBird} from 'react-icons/fa';

class Steps extends Component {
    render() {
        return(
            <Content>
                <Step>
                    <FaSnowboarding />
                    <h2>Snowboarding</h2>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Step>

                <Step>
                    <FaBiking />
                    <h2>Bike Riding</h2>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Step>

                <Step>
                    <FaKiwiBird />
                    <h2>Bird Watching</h2>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Step>              
            </Content>
        )
    }
}

export default Steps;