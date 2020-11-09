import React, {Component} from 'react';
import {Content} from './styles';

import History from '../../services/history';

import {FaArrowLeft} from 'react-icons/fa'

class BackButtom extends Component {

    render() {
        return(
            <Content onClick={History.goBack}>
                <FaArrowLeft />
                <p>Back</p>
            </Content>
        )
    }
}

export default BackButtom;