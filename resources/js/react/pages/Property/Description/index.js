import React, {Component} from 'react';

import {Content, Amenities} from './styles';

import { FaClock, FaSwimmingPool, FaUtensils, FaWifi } from 'react-icons/fa';

class CampgroundDescription extends Component {

    render() {
        return(
            <Content>
                <p>{this.props.description}</p>

                <Amenities>
                    <h2>Amenities</h2>

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

                <section>
                    <FaClock />
                    <p>Check-in: {this.props.checkIn} | Check-out: {this.props.checkOut}</p>
                </section>
            </Content>
        )
    }
}

export default CampgroundDescription;