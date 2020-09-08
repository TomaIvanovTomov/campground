import React, {Component} from 'react';
import {Content} from './styles';

import {FaStar} from 'react-icons/fa'

class Stars extends Component {
    constructor() {
        super();

        this.state = {
            stars: [
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
                {this.state.stars.map(star => (
                    <FaStar key={star.value} size={20} color={star.value <= this.props.review ? '#ff5e00' : '#e4e4e4'} />
                ))}
            </Content>
        )
    }
}

export default Stars;