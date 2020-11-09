import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {Content, Place, Banner} from './styles';

import Img from '../../../assets/campground.jpg';

import {FaMapMarkerAlt, FaArrowRight} from 'react-icons/fa';
import {SanctumContext} from "react-sanctum";

class Places extends Component {

    static contextType = SanctumContext;

    constructor(props) {
        super(props);

        this.state = {
            topProperties: []
        }
    }

    async componentDidMount() {
        await axios.get("/api/v1/get-top-properties/").then(response => {
            this.setState({topProperties: response.data.props});
        })
    }

    render() {
        if (this.state.topProperties) {
            return(
                <Content>
                    {this.state.topProperties.map((property, index) => (
                        <Link to="/">
                            <Place>
                                <Banner img={property.image}>
                                    <h2>{property.name}</h2>

                                    <section>
                                        <FaMapMarkerAlt />
                                        <p>{property.country}, {property.city}</p>
                                    </section>
                                </Banner>

                                <section>
                                    <p>4 days 3 nights</p>
                                    <h2>{property.rate_name} -{property.price}</h2>
                                </section>

                                <section>
                                    <h2>Discover</h2>
                                    <FaArrowRight />
                                </section>
                            </Place>
                        </Link>
                    ))}
                </Content>
            )
        } else {
            return(
                <Content>
                </Content>
            )
        }
    }
}

export default Places;
