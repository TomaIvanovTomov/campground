import React, {Component} from 'react';

import {FaDollarSign, FaCalendarAlt, FaConciergeBell, FaBan} from 'react-icons/fa';

import {Content, GraphArea, MonthInfo, Info, Reservations} from './styles';

import Graph from './Graph';
import Table from '../Reservations/Table';

class Board extends Component {
    constructor() {
        super();

        this.state = {
          sales: [],
          reservations: []
        }

        this.loadGraphs = this.loadGraphs.bind(this);
        this.loadReservations = this.loadReservations.bind(this);
    }

    loadGraphs() {
        const graphs = [
          {
            "id": "April",
            "data": [
              {
                "x": "1",
                "y": 5
              },
              {
                "x": "2",
                "y": 2
              },
              {
                "x": "3",
                "y": 7
              },
              {
                "x": "4",
                "y": 10
              },
              {
                "x": "5",
                "y": 12
              },
              {
                "x": "6",
                "y": 9
              },
              {
                "x": "7",
                "y": 8
              },
              {
                "x": "8",
                "y": 10
              },
              {
                "x": "9",
                "y": 13
              },
              {
                "x": "10",
                "y": 15
              },
              {
                "x": "11",
                "y": 13
              },
              {
                "x": "12",
                "y": 12
              },
              {
                "x": "13",
                "y": 9
              },
              {
                "x": "14",
                "y": 3
              },
              {
                "x": "15",
                "y": 5
              },
              {
                "x": "16",
                "y": 1
              },
              {
                "x": "17",
                "y": 1
              },
              {
                "x": "18",
                "y": 5
              },
              {
                "x": "19",
                "y": 8
              },
              {
                "x": "20",
                "y": 10
              },
              {
                "x": "21",
                "y": 8
              },
              {
                "x": "22",
                "y": 11
              },
              {
                "x": "23",
                "y": 12
              },
              {
                "x": "24",
                "y": 14
              },
              {
                "x": "25",
                "y": 9
              },
              {
                "x": "26",
                "y": 8
              },
              {
                "x": "27",
                "y": 5
              },
              {
                "x": "28",
                "y": 3
              },
              {
                "x": "29",
                "y": 5
              },
              {
                "x": "30",
                "y": 8
              }
            ]
          }
        ];

        this.setState({sales: graphs});
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

    componentWillMount() {
      this.loadGraphs();
      this.loadReservations();
    }

    render() {
        return(
            <Content>
                <h1>Dashboard</h1>
                <GraphArea>
                  <h2>Sales</h2>
                  <Graph data={this.state.sales} />
                </GraphArea>
                <MonthInfo>
                  <Info>
                    <FaDollarSign />
                    <section>
                      <h3>$2,354</h3>
                      <p>Sales this month</p>
                    </section>
                  </Info>
                  <Info>
                    <FaCalendarAlt />
                    <section>
                      <h3>1450</h3>
                      <p>Total reservations</p>
                    </section>
                  </Info>
                  <Info>
                    <FaConciergeBell />
                    <section>
                      <h3>67</h3>
                      <p>New reservations</p>
                    </section>
                  </Info>
                  <Info>
                    <FaBan />
                    <section>
                      <h3>12</h3>
                      <p>Cancellations</p>
                    </section>
                  </Info>
                </MonthInfo>

                <Reservations>
                  <h2>Upcoming reservations</h2>
                  <p onClick={() => this.props.changeMenu('reservations')}>View all</p>
                </Reservations>
                <Table data={this.state.reservations} />
            </Content>
        )
    }
}

export default Board;