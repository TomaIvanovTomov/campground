import React, {Component} from 'react';

import {Content} from './styles';

import {FaPen, FaTrashAlt} from 'react-icons/fa';

class Table extends Component {
    constructor() {
        super();

        this.state = {
        }
    }

    render() {
        return(
            <Content>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Rate management</th>
                        <th>Site types</th>
                        <th>Policy</th>
                        <th>Restrictions</th>
                        <th>Action</th>
                    </tr>
                    
                    {this.props.data.map(plan => (
                        <tr>
                            <td>{plan.name}</td>
                            <td>{plan.management}</td>
                            <td>{plan.sites.map(site => (
                                <p>{site}</p>
                            ))}</td>
                            <td>{plan.policy}</td>
                            <td>{plan.restrictions}</td>
                            <td>
                                <FaPen />
                                <FaTrashAlt />
                            </td>
                        </tr>
                    ))}
                </table>                
            </Content>
        )
    }
}

export default Table;