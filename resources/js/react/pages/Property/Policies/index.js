import React, {Component} from 'react';

import {FaCcMastercard, FaCcVisa, FaClock} from 'react-icons/fa';

import {Content, Section, Header, Cards} from './styles';

class Policies extends Component {

    render() {
        return(
            <Content>
                <Section>
                    <Header>
                        <FaClock />
                        <h2>CHECK-IN & CHECK-OUT</h2>
                    </Header>                    

                    <p><span>Check-in: </span>{this.props.data.checkIn}.</p>
                    <p><span>Check-out: </span>{this.props.data.checkOut}.</p>
                    <p><span>the minimum check-in age is {this.props.data.minimumAge}.</span></p>
                </Section>

                <Section>
                    <Header>
                        <h2>PARKING</h2>
                    </Header>                    

                    {this.props.data.parking.map(park => (
                        <p>- {park}</p>
                    ))}
                </Section>

                <Section>
                    <Header>
                        <h2>CANCELLATION / PREPAYMENT</h2>
                    </Header>                    

                    <p>{this.props.data.cancellation}</p>
                </Section>

                <Section>
                    <Header>
                        <h2>CARD ACCEPTED AT HOTEL</h2>
                    </Header>                    
                    
                    <Cards>
                        <FaCcMastercard />
                        <FaCcVisa />
                    </Cards>
                    <p>{this.props.data.paymentDescription}</p>
                </Section>
            </Content>
        )
    }
}

export default Policies;