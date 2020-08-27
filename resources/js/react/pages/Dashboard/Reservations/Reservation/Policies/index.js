import React, {Component} from 'react';

import {Content} from './styles';

class Policies extends Component {
    constructor() {
        super();

        this.state = {
        }
    }

    render() {
        return(
            <Content>
                {this.props.policies.map(policy => (
                    <>
                        <h3>{policy.name}</h3>

                        <ul>
                            {policy.values.map(value => (
                                <li>{value}</li>
                            ))}
                        </ul>
                    </>
                ))}               
            </Content>
        )
    }
}

export default Policies;