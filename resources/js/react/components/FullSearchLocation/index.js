import React, {Component} from 'react';

import {Link} from 'react-router-dom';

import {Content, Info, ContentDivision, Header, Location, Amenities, Distance, Reviews, NumberReviews, Price, Footer, Buttons} from './styles';

import {FaMapMarkerAlt, FaSwimmingPool, FaUtensils, FaWifi, FaCompass} from 'react-icons/fa';

import Stars from '../../components/Stars';

import Park from '../../assets/park.jpg';

class FullSearchLocation extends Component {
    render() {
        return(
            <Link style={{"width": "100%"}} to={`/property/${this.props.data.id}`}>
                <Content>
                    <img src={this.props.data.image} />
                    <Info>
                        <ContentDivision>
                            <section>
                                <Header>
                                    <h2>{this.props.data.title}</h2>
                                    <Stars review={this.props.data.review} />
                                </Header>

                                <Location>
                                    <FaMapMarkerAlt />
                                    <p>{this.props.data.location}</p>
                                </Location>

                                {this.props.data.bookable &&
                                    <Amenities>
                                        <div>
                                            <section>
                                                <FaSwimmingPool />
                                                <p>Swimming Pool</p>
                                            </section>

                                            <section>
                                                <FaUtensils />
                                                <p>Barbeque</p>
                                            </section>

                                            <section>
                                                <FaWifi />
                                                <p>Free Wi-Fi</p>
                                            </section>
                                        </div>
                                    </Amenities>
                                }

                                <Distance>
                                    <FaCompass />
                                    <p>2.1 miles from city</p>
                                </Distance>
                            </section>

                            {!this.props.slim &&
                                <section>
                                    <Reviews>
                                        <NumberReviews>
                                            <span>{this.props.data.excellents}</span>
                                            <p>Excellent</p>
                                        </NumberReviews>

                                        <p>{this.props.data.reviews} Review</p>
                                    </Reviews>

                                    {this.props.data.bookable &&
                                        <Price>
                                            <p>${this.props.data.fourNights}</p>
                                            <p>Total for 4 nights</p>
                                            <span>(exc. all taxes)</span>
                                        </Price>
                                    }
                                </section>
                            }
                        </ContentDivision>

                        {!this.props.slim &&
                            <Footer>
                                <p>
                                    {this.props.data.description}
                                </p>
                                <Buttons>
                                    {this.props.data.bookable &&
                                        <button>Book Now</button>
                                    }
                                    <button>Add to Trip</button>
                                </Buttons>
                            </Footer>
                        }
                    </Info>
                </Content>
            </Link>
        )
    }
}

export default FullSearchLocation;
