import React, {Component} from 'react';

import {FaExclamationTriangle, FaEyeSlash, FaExchangeAlt, FaComments, FaCreditCard, FaExclamationCircle} from 'react-icons/fa';

import {Section} from './styles';

class Actions extends Component {
    constructor() {
        super();

        this.state = {
        }
    }

    render() {
        return(
            <>
                <Section>
                    <FaExclamationTriangle />
                    <p>Report guest misconduct</p>
                </Section>
                <Section>
                    <FaEyeSlash />
                    <p>Mark as no show</p>
                </Section>
                <Section>
                    <FaExchangeAlt />
                    <p>Change reservation dates/price</p>
                </Section>
                <Section>
                    <FaComments />
                    <p>Send note/message to guest</p>
                </Section>
                <Section>
                    <FaCreditCard />
                    <p>Credit card details</p>
                </Section>
                <Section>
                    <FaExclamationCircle />
                    <p>Report credit card</p>
                </Section>
            </>
        )
    }
}

export default Actions;