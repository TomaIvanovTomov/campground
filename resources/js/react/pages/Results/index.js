import React, {Component} from 'react';
import Switch from 'react-switch';

import {Content, Header} from './styles';

import List from './List';
import Map from './Map';

import BackButtom from '../../components/BackButtom';
import PageHeader from '../../components/Header';
import PageFooter from '../../components/Footer';

class Results extends Component {
    constructor() {
        super();

        this.state = {
            checked: true,
            mode: 'map',
            results: []
        };

        this.loadResults = this.loadResults.bind(this);
        this.changeMode = this.changeMode.bind(this);
    }

    changeMode() {
        if (this.state.mode == 'list') {
            this.setState({
                mode: 'map',
                checked: !this.state.checked
            });
        } else {
            this.setState({
                mode: 'list',
                checked: !this.state.checked
            });
        }
    }

    loadResults() {
        axios.get("/api/v1/get-properties")
            .then(response => {
                this.setState({results: response.data})
            })
    }

    componentDidMount() {
        this.loadResults();
    }

    render() {
        return(
            <>
            <PageHeader internal />
            <Content>
                <BackButtom />

                <Header>
                    <h2>Filter</h2>

                    <section>
                        <h2>42 properties found</h2>

                        <div>
                            <h2>List view</h2>
                            <Switch
                                uncheckedIcon={false}
                                checkedIcon={false}
                                checked={this.state.checked}
                                onChange={() => this.changeMode()}
                                offColor={'#2d364c'}
                                onColor={'#2d364c'}
                            />
                            <h2>Map view</h2>
                        </div>
                    </section>
                </Header>

                {this.state.mode == 'list' &&
                    <List data={this.state.results} />
                }

                {this.state.mode == 'map' &&
                    <Map data={this.state.results} />
                }
            </Content>
            <PageFooter />
            </>
        )
    }
}

export default Results;
