import React, {Component} from 'react';

import {Content, Header} from './styles';

import Select from 'react-select'
import selectStyles from './selectInputStyles';

import { FaChevronDown } from 'react-icons/fa';

import Img from '../../../assets/camping.jpg';

import Guests from '../../../components/Guests';

class SiteType extends Component {
    constructor() {
        super();

        this.state = {
            options: [
                { value: 'Site 1', label: 'Site 1' },
                { value: 'Site 2', label: 'Site 2' },
                { value: 'Site 3', label: 'Site 3' }
            ]
        };
    }

    render() {
        return(
            <Content>
                <Header>
                    <img src={this.props.data.image} />

                    <h2>{this.props.data.title}</h2>
                </Header>

                <table>
                    <tr>
                        <th>What's included</th>
                        <th>Occupants</th>
                        <th>Site</th>
                        <th>Price for 1 night</th>
                    </tr>

                    {this.props.data.sites.map(site => (
                        <tr>
                            <td>
                                <h3>{site.title}</h3>
                                <p>{site.description} {site.charges && `$${site.charges}`}</p>
                            </td>
                            <td>
                                <Guests guests={site.occupants} />
                            </td>
                            <td>
                                <section>
                                    <FaChevronDown />
                                    <Select
                                        options={site.sitesNames}
                                        styles={selectStyles}
                                        className='select-input'
                                        placeholder=''
                                    />
                                </section>
                            </td>
                            <td>
                                <h2>${site.valuePerNight}</h2>
                            </td>
                        </tr>
                    ))}
                </table>
            </Content>
        )
    }
}

export default SiteType;
