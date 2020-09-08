import React, {Component} from 'react';

import {Content, Confirmed, Cancelled, Expired} from './styles';;

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
                        <th>Invoice</th>
                        <th>Period</th>
                        <th>Issue Date</th>
                        <th>Due Date</th>
                        <th>Amount (USD)</th>
                        <th>Status</th>
                    </tr>

                    {this.props.data.map(invoice => (
                        <tr>
                            <td><h2>{invoice.invoice}</h2></td>
                            <td>{invoice.period}</td>
                            <td>{invoice.issueDate}</td>
                            <td>{invoice.dueDate}</td>
                            <td>{invoice.amount}</td>
                            <td>
                                {invoice.status == "paid" &&
                                    <Confirmed>Paid</Confirmed>
                                }

                                {invoice.status == "unpaid" &&
                                    <Cancelled>Unpaid</Cancelled>
                                }
                            </td>
                        </tr>
                    ))}
                </table>
            </Content>
        )
    }
}

export default Table;
