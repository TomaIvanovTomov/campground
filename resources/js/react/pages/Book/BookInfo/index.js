import React, {Component} from 'react';

import {Content, Header, Info} from './styles';

import { FaCalendarAlt, FaCaravan, FaUser } from 'react-icons/fa';

class BookInfo extends Component {

    render() {
        return(
            <Content>
                <Header>
                    <h2>{this.props.data.price}$</h2>
                    <p>price for 1 night</p>
                </Header>

                <Info>
                    <h2>Site</h2>

                    <div>
                        <section>
                            <FaCaravan />
                            <p>{this.props.data.title}</p>
                        </section>
                    </div>
                </Info>

                <Info>
                    <h2>Date</h2>

                    <div>
                        <section>
                            <FaCalendarAlt />
                            <p>{this.props.data.date}</p>
                        </section>
                    </div>
                </Info>

                <Info>
                    <h2>Guests</h2>

                    <div>
                        <section>
                            <FaUser />
                            <p>{this.props.data.guests} Guests</p>
                        </section>
                    </div>
                </Info>
            </Content>
        )
    }
}

export default BookInfo;
