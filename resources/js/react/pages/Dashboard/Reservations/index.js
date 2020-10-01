import React, {Component} from 'react';

import {FaPrint, FaFileDownload} from 'react-icons/fa';

import {Content, Info, Pagination, Page} from './styles';

import Table from './Table';
import Search from './Search';
import Reservation from './Reservation';
import {toast} from "react-toastify";

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

    async loadReservations() {
        await axios.get("/api/v1/get-reservations")
        .then((response) => {
            this.setState({reservations: response.data});
        })
        .catch((err) => {
            toast.message(err)
        })

        this.setState({reservations: data});
    }

    searchSubmit(data) {
        axios.post("/api/v1/search-reservations", {
            data: data
        })
        .then(response => {
            this.setState({reservations: response.data}, function() {
                console.log(this.state.reservations)
            })
        })
        .catch(response => {
            toast.error(response.data.message)
        })
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

                    {/*<Pagination>
                        <Page active>1</Page>
                        <Page>2</Page>
                        <Page>3</Page>
                        <Page>4</Page>
                    </Pagination>*/}
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
