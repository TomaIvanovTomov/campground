import React, {Component} from 'react';

import {Link} from 'react-router-dom';

import {Content, Info, Buttons} from './styles';

import {FaStar} from 'react-icons/fa';

import Park from '../../assets/park.jpg';

class SearchLocation extends Component {
    render() {
        return(
            <Link style={{"width": "100%"}} to={`/property/${this.props.data.id}`}>
            <Content>
                <img src={this.props.data.image} />
                <Info>
                    <h2>{this.props.data.title}</h2>
                    <p>
                        {!this.props.showLocation &&
                            <>
                                {this.props.data.description}
                            </>
                        }

                        {this.props.showLocation &&
                            <>
                                {this.props.data.location}
                            </>
                        }

                        <span>
                            {this.props.data.reviews && this.props.data.reviews.map(m => (
                                <FaStar />
                            ))}
                        </span>
                    </p>
                    <Buttons>
                        {this.props.data.bookable &&
                            <button>Book Now</button>
                        }
                        <button>Add to Trip</button>
                    </Buttons>
                </Info>
            </Content>
            </Link>
        )
    }
}

export default SearchLocation;
