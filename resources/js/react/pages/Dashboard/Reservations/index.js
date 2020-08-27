import React, {Component} from 'react';

import {FaPrint, FaFileDownload} from 'react-icons/fa';

import {Content, Info, Pagination, Page} from './styles';

import Table from './Table';
import Search from './Search';
import Reservation from './Reservation';

class Reservations extends Component {
    constructor() {
        super();

        this.state = {
            reservations: [],
            reservation: null
        }

        this.loadReservations = this.loadReservations.bind(this);
        this.searchSubmit = this.searchSubmit.bind(this);
    }

    loadReservations() {
        const data = [
            {
                traveler: 'Adam West',
                id: '31728A671',
                site: 'Deluxe',
                reservationDate: '20 Oct - 23 Oct 2020',
                bookingDate: '18 Oct 2020',
                guests: 3,
                price: 230,
                commision: 30,
                status: 1
            },
            {
                traveler: 'John Doe',
                id: '31728A671',
                site: 'Deluxe',
                reservationDate: '20 Oct - 23 Oct 2020',
                bookingDate: '18 Oct 2020',
                guests: 4,
                price: 280,
                commision: 80,
                status: 2
            },
            {
                traveler: 'Camila White',
                id: '31728A671',
                site: 'Deluxe',
                reservationDate: '20 Oct - 23 Oct 2020',
                bookingDate: '18 Oct 2020',
                guests: 1,
                price: 180,
                commision: 20,
                status: 3
            }
        ];

        this.setState({reservations: data});
    }

    searchSubmit(data) {
        // call to update reservations data
    }

    componentWillMount() {
        this.loadReservations();
    }

    render() {
        return(
            <Content>
                {!this.state.reservation &&
                    <>
                    <h1>Reservations</h1>
                
                    <Search searchSubmit={(data) => this.searchSubmit(data)} />
    
                    <Info>
                        <p>Showing 10 results per page</p>
    
                        <div>
                            <section>
                                <FaPrint />
                                <p>Print List</p>
                            </section>
                            
                            <section>
                                <FaFileDownload />
                                <p>Download List</p>
                            </section>
                        </div>
                    </Info>
    
                    <Table
                        data={this.state.reservations}
                        openReservation={(data) => this.setState({reservation: data})}
                    />

                    <Pagination>
                        <Page active>1</Page>
                        <Page>2</Page>
                        <Page>3</Page>
                        <Page>4</Page>
                    </Pagination>
                    </>
                }

                {this.state.reservation &&
                    <Reservation reservation={this.state.reservation} />
                }
            </Content>
        )
    }
}

export default Reservations;