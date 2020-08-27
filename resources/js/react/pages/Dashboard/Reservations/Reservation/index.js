import React, {Component} from 'react';

import {FaPhone, FaEnvelope, FaPrint} from 'react-icons/fa';

import Select from 'react-select';
import selectStyles from '../selectStyles';

import {
  Content,
  Info,
  Sidebar,
  ReservationContent,
  SidebarItem,
  ReservationInfo,
  Confirmed,
  Cancelled,
  Expired
} from './styles';

import Bullets from './Bullets';
import Site from './Site';
import Policies from './Policies';
import Actions from './Actions';

class Reservation extends Component {
    constructor() {
        super();

        this.state = {
          optionsStatus: [],
          reservation: []
        }
    }

    componentWillMount() {
      const status = [
          {value: 'confirmed', label: 'Confirmed'},
          {value: 'expired', label: 'Expired'},
          {value: 'cancelled', label: 'Cancelled'}
      ];

      const data = {
        traveler: 'Adam West',
        email: 'adam@gmail.com',
        phone: '+987987987',
        id: '31728A671',
        site: 'Deluxe',
        reservationDate: '20 Oct - 23 Oct 2020',
        bookingDate: '18 Oct 2020',
        guests: 3,
        price: 230,
        commision: 30,
        status: 1,
        bullets: {
          bookingDate: '18 Oct 2020',
          sites: 2,
          guests: 9,
          price: 180,
          priceType: 'USD',
          commision: 30,
          stayLength: 3,
          checkIn: '20 Oct 2020',
          checkOut: '23 Oct 2020'
        },
        site: {
          type: 'Deluxe',
          image: 'siteimg',
          adults: 2,
          children: 2,
          items: [
            {
              date: '20 Oct - 21 Oct 2020',
              policy: 'Non-refundable',
              price: 60,
              priceType: 'USD'
            },
            {
              date: '21 Oct - 22 Oct 2020',
              policy: 'Refundable',
              price: 70,
              priceType: 'USD'
            }
          ],
          values: [
            {
              name: 'Sub total',
              value: 130,
              valueType: 'USD'
            },
            {
              name: 'Vat @ 5%',
              value: 10,
              valueType: 'USD'
            },
            {
              name: 'Tourism fee @ USD 10 per night',
              value: 20,
              valueType: 'USD'
            },
            {
              name: 'Total',
              value: 160,
              valueType: 'USD',
              total: true
            }
          ]
        },
        policies: [
          {
            name: 'Cancellation policy',
            values: [
              'The guest will be charged the total price if they cancel anytime'
            ]
          },
          {
            name: 'Pets',
            values: [
              'Pets are allowed at 10 USD per pet'
            ]
          },
          {
            name: 'Children and extra beds',
            values: [
              'All kids are welcome',
              'Kids stay free! One child 12 years old or younger stays free when using existing bedding',
              'Rollaway/extra beds are available for USD 150 per night',
              'Free cribs (infant beds)'
            ]
          },
          {
            name: 'Internet',
            values: [
              'Free Wi-Fi in public areas',
              'Free Wi-Fi in RVs'
            ]
          }
        ]
    };

      this.setState({
          optionsStatus: status,
          reservation: data
      });
    }
    
    render() {
        return(
          <>
            <h1>Reservation Details <span>{this.props.reservation}</span></h1>
            <Content>
                <ReservationContent>
                  <Info>
                    <ReservationInfo>
                      <div>
                        <h2>{this.state.reservation.traveler}</h2>
                        <p>{this.props.reservation}</p>
                      </div>

                      {this.state.reservation.status == 1 &&
                        <Confirmed>Confirmed</Confirmed>
                      }

                      {this.state.reservation.status == 2 &&
                        <Cancelled>Cancelled</Cancelled>
                      }

                      {this.state.reservation.status == 3 &&
                        <Expired>Expired</Expired>
                      }                      
                    </ReservationInfo>

                    <div>
                        <section>
                            <FaEnvelope />
                            <p>{this.state.reservation.email}</p>
                        </section>
                        
                        <section>
                            <FaPhone />
                            <p>{this.state.reservation.phone}</p>
                        </section>
                        
                        <section>
                            <FaPrint />
                            <p>Print Page</p>
                        </section>
                    </div>
                  </Info>

                  <Bullets bullets={this.state.reservation.bullets} />
                  <Site site={this.state.reservation.site} />                  
                  <Policies policies={this.state.reservation.policies} />                  
                </ReservationContent>

                <Sidebar>
                  <SidebarItem>
                    <Actions />
                  </SidebarItem>
                  
                  <SidebarItem>
                    <h3>Payment Status</h3>
                    <Select
                        options={this.state.optionsStatus}
                        styles={selectStyles}
                        onChange={e => console.log(e)}
                        placeholder=''
                    />
                    <button>Save</button>
                  </SidebarItem>
                </Sidebar>

            </Content>
          </>
        )
    }
}

export default Reservation;