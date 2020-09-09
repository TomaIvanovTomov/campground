import React, {Component} from 'react';

import {Content, Confirmed, Cancelled, Expired} from './styles';;

class Table extends Component {
    constructor() {
        super();

        this.state = {
        }

        this.openReservation = this.openReservation.bind(this);
    }

    openReservation(data) {
        if (this.props.openReservation) {
            this.props.openReservation(data);
        }
    }

    render() {
        if (!this.props.data) {
            return (
                <Content>
                    <p>No reservations found</p>
                </Content>
            )
        } else {
            return(
                <Content>
                    <table>
                        <tr>
                            <th>Traveler</th>
                            <th>Site</th>
                            <th>Reservation date(s)</th>
                            <th>Booking date</th>
                            <th>Guests</th>
                            <th>Price (USD)</th>
                            <th>Commision (USD)</th>
                            <th>Status</th>
                        </tr>

                        {this.props.data.map(reservation => (
                            <tr onClick={() => this.openReservation(reservation.id)}>
                                <td><h2>{reservation.traveler}</h2><p>{reservation.id}</p></td>
                                <td>{reservation.site}</td>
                                <td>{reservation.reservationDate}</td>
                                <td>{reservation.bookingDate}</td>
                                <td>{reservation.guests}</td>
                                <td>{reservation.price}</td>
                                <td>{reservation.commision}</td>
                                <td>
                                    {reservation.status == 'confirmed' &&
                                    <Confirmed>Confirmed</Confirmed>
                                    }

                                    {reservation.status == 'cancelled' &&
                                    <Cancelled>Cancelled</Cancelled>
                                    }

                                    {reservation.status == 'expired' &&
                                    <Expired>Expired</Expired>
                                    }
                                </td>
                            </tr>
                        ))}
                    </table>
                </Content>
            )
        }
    }
}

export default Table;
