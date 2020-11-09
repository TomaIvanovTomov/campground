import React, {Component} from 'react';

import {Link} from 'react-router-dom';

import {Content, Header, Buttons, Info, Legs, LegInfo} from './styles';

import {FaMapMarkerAlt} from 'react-icons/fa';

import Stars from '../../../components/Stars';

class Trip extends Component {

    constructor(props) {
        super(props);

        this.delete = this.delete.bind(this)
    }

    delete(id) {
        axios.post('/api/v1/delete-trip', {
            trip_id: id
        })
        return this.props.handler()
    }

    render() {
        const legs = this.props.data.legs.length ? true : false
        return(
            <Content>
                <Header>
                    <h2>{this.props.data.title}</h2>

                    <Buttons>
                        <Link style={{"width": "100%"}} to={`/trips/${this.props.data.id}`}>
                            <button>Open Journal</button>
                        </Link>
                        <Link style={{"width": "100%"}} to={`/plan?id=${this.props.data.id}`}>
                            <button>Edit</button>
                        </Link>
                        <button onClick={() => this.delete(this.props.data.id)}>Delete</button>
                    </Buttons>
                </Header>

                <Info>
                    <h3>Description</h3>

                    <p>{this.props.data.description}</p>

                    <h3>Starting point</h3>

                    <h2>{this.props.data.startingPoint}</h2>

                    {this.props.data.upcoming &&
                        <section>
                            <p>Upcoming</p>
                            <span>•</span>
                            <p>Booking ID - {this.props.data.bookingID}</p>
                        </section>
                    }
                </Info>

                {legs ? (
                    <Legs>
                        {this.props.data.legs.map((leg, index) => (
                            <LegInfo>
                                <h3>Leg {index + 1}</h3>
                                <div>
                                    <h2>{leg.place}</h2>

                                    <section>
                                        <Stars review={leg.review} />
                                    </section>
                                </div>

                                <div>
                                    <section>
                                        <FaMapMarkerAlt />
                                        <p>{leg.address}</p>
                                    </section>
                                </div>
                            </LegInfo>
                        ))}
                    </Legs>
                ) : "" }
            </Content>

        )
    }
}

export default Trip;
