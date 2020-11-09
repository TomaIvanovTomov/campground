import React, {Component} from 'react';

import {Content, Header} from './styles';
import PageHeader from '../../components/Header';
import PageFooter from '../../components/Footer';

import Trip from './Trip';
import {SanctumContext} from "react-sanctum";

class Trips extends Component {

    static contextType = SanctumContext;

    constructor(props) {
        super(props);

        this.state = {
            trips: []
        };

        this.loadTrips = this.loadTrips.bind(this);
    }

    async loadTrips() {
        await axios.get("/api/v1/get-user-trips/"+this.context.user.id)
            .then(response => {
                this.setState({trips: response.data})
            })

        this.setState({trips: data});
    }

    componentDidMount() {
        this.loadTrips();
    }

    render() {
        return(
            <>
                <PageHeader internal />
                <Content>
                    <Header>
                        <p>My trips</p>
                        <h2>All trips</h2>
                    </Header>

                    {this.state.trips && this.state.trips.map(trip => (
                        <Trip data={trip} handler={this.loadTrips} />
                    ))}
                </Content>
                <PageFooter />
            </>
        )
    }
}

export default Trips;
