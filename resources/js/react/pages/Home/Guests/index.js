import React, {Component} from 'react';

import {Content, Guest, GuestAvatar} from './styles';

import Img from '../../../assets/guest.jpg';

class Guests extends Component {

    constructor() {
        super();

        this.state = {
            testimonials: []
        }
    }

    async componentDidMount() {
        await axios.get("/api/v1/get-reviews")
            .then(response => {
                this.setState({testimonials: response.data})
            })
    }

    render() {
        if (!this.state.testimonials) {
            return <Content></Content>;
        } else {
            return(
                <Content>
                    {this.state.testimonials.map(review => (
                            <Guest>
                                <GuestAvatar img={Img} />

                                <h2>{review.name}</h2>

                                <p>{review.review}</p>
                            </Guest>
                        )
                    )}
                </Content>
            )
        }
    }
}

export default Guests;
