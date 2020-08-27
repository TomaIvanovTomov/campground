import React, {Component} from 'react';

import {FaChild, FaMale} from 'react-icons/fa';

import {Content, SiteInfo, Prices, Price} from './styles';

import SiteImg from '../../../../../assets/site.jpg';

class Site extends Component {
    constructor() {
        super();

        this.state = {
        }
    }

    render() {
        return(
            <Content>
                <h2>{this.props.site.type}</h2>

                <SiteInfo>
                    <div>
                        <img src={SiteImg} />
                        <section>
                            <FaMale />
                            <p>{this.props.site.adults}</p>
                            <FaChild />
                            <p>{this.props.site.children}</p>
                        </section>
                    </div>
                    <div>
                        <table>
                            <tr>
                                <th>Date</th>
                                <th>Policy</th>
                                <th>Price per night</th>
                            </tr>
                            {this.props.site.items.map(item => (
                                <tr>
                                    <td>{item.date}</td>
                                    <td>{item.policy}</td>
                                    <td>{item.priceType} {item.price}</td>
                                </tr>
                            ))}
                        </table>
                        
                        <Prices>
                            {this.props.site.values.map(value => (
                                <Price total={value.total ? true : false}>
                                    <h4>{value.name}</h4><p>{value.valueType} {value.value}</p>
                                </Price>
                            ))}
                        </Prices>
                    </div>
                </SiteInfo>
            </Content>
        )
    }
}

export default Site;