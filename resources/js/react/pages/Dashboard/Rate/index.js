import React, {Component} from 'react';

import {Content, ContentHeader} from './styles';

import Table from './Table';

class Rate extends Component {
    constructor() {
        super();

        this.state = {
            plans: []
        }

        this.loadPlans = this.loadPlans.bind(this);
    }

    loadPlans() {
        const data = [
            {
                name: 'Standard rate',
                management: 'Automatic',
                policy: 'General',
                restrictions: 'No',
                sites: [
                    'Deluxe',
                    'Premium',
                    'Bronze',
                    'Star',
                    'Gold'
                ]
            }
        ];

        this.setState({plans: data});
    }

    componentWillMount() {
        this.loadPlans();
    }

    render() {
        return(
            <Content>
                <ContentHeader>
                    <h1>Rate plans</h1>
                    <button>Add new plan</button>
                </ContentHeader>

                <Table
                    data={this.state.plans}
                />
            </Content>
        )
    }
}

export default Rate;