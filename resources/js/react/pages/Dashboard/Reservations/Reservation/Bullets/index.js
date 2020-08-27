import React, {Component} from 'react';

import {FaCalendarAlt, FaKey, FaMale, FaCoins, FaPercentage, FaClock, FaSignInAlt, FaSignOutAlt} from 'react-icons/fa';

import {Content, Item} from './styles';

class Bullets extends Component {
    constructor() {
        super();

        this.state = {
        }
    }

    render() {
        return(
            <Content>
                <Item>
                    <h3>BOOKING DATE</h3>
                    <section>
                        <FaCalendarAlt />
                        <p>{this.props.bullets.bookingDate}</p>
                    </section>
                </Item>
                <Item>
                    <h3>TOTAL SITES</h3>
                    <section>
                        <FaKey />
                        <p>{this.props.bullets.sites}</p>
                    </section>
                </Item>
                <Item>
                    <h3>GUESTS</h3>
                    <section>
                        <FaMale />
                        <p>{this.props.bullets.guests}</p>
                    </section>
                </Item>
                <Item>
                    <h3>PRICE</h3>
                    <section>
                        <FaCoins />
                        <p>{this.props.bullets.price} {this.props.bullets.priceType}</p>
                    </section>
                </Item>
                <Item>
                    <h3>COMMISION</h3>
                    <section>
                        <FaPercentage />
                        <p>{this.props.bullets.commision}</p>
                    </section>
                </Item>
                <Item>
                    <h3>LENGTH OF STAY</h3>
                    <section>
                        <FaClock />
                        <p>{this.props.bullets.stayLength} nights</p>
                    </section>
                </Item>
                <Item>
                    <h3>CHECKIN</h3>
                    <section>
                        <FaSignInAlt />
                        <p>{this.props.bullets.checkIn}</p>
                    </section>
                </Item>
                <Item>
                    <h3>CHECKOUT</h3>
                    <section>
                        <FaSignOutAlt />
                        <p>{this.props.bullets.checkOut}</p>
                    </section>
                </Item>
            </Content>
        )
    }
}

export default Bullets;