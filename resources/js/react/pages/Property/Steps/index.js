import React, {Component} from 'react';

import {FaCheck} from 'react-icons/fa'

import {Content, Step} from './styles';

class Steps extends Component {
    constructor() {
        super();

        this.state = {
            
        }
    }

    render() {
        return(
            <Content>
                <Step
                completed={this.props.completed.includes(1) ? true : false}
                active={this.props.step == 1 ? true : false}>
                    <section>
                        <p>STEP 1</p>
                        <h1>Property Information</h1>
                    </section>
                    <FaCheck />
                </Step>

                <Step
                active={this.props.step == 2 ? true : false}>
                    <section>
                        <p>STEP 2</p>
                        <h1>Tax Setup</h1>
                    </section>
                    <FaCheck />
                </Step>

                <Step
                active={this.props.step == 3 ? true : false}>
                    <section>
                        <p>STEP 3</p>
                        <h1>Add Sites</h1>
                    </section>
                    <FaCheck />
                </Step>

                <Step
                active={this.props.step == 4 ? true : false}>
                    <section>
                        <p>STEP 4</p>
                        <h1>Payments and policies</h1>
                    </section>
                    <FaCheck />
                </Step>
            </Content>
        )
    }
}

export default Steps;