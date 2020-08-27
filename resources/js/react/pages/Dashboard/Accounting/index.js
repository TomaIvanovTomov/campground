import React, {Component} from 'react';

import {FaPrint, FaFileDownload} from 'react-icons/fa';

import {Content, Info, Pagination, Page} from './styles';

import Table from './Table';
import Search from './Search';

class Accounting extends Component {
    constructor() {
        super();

        this.state = {
            invoices: []
        }

        this.loadInvoices = this.loadInvoices.bind(this);
        this.searchSubmit = this.searchSubmit.bind(this);
    }

    loadInvoices() {
        const data = [
            {
                id: 'ASDF23423',
                period: 'Deluxe',
                issueDate: '20 Oct - 23 Oct 2020',
                dueDate: '18 Oct 2020',
                amount: 325,
                status: 1
            },
            {
                id: '3434KJ3K3',
                period: 'Deluxe',
                issueDate: '20 Oct - 23 Oct 2020',
                dueDate: '18 Oct 2020',
                amount: 183,
                status: 2
            },
            {
                id: '0D8RF8F8F2',
                period: 'Deluxe',
                issueDate: '20 Oct - 23 Oct 2020',
                dueDate: '18 Oct 2020',
                amount: 280,
                status: 2
            },
            {
                id: '1231231232',
                period: 'Deluxe',
                issueDate: '20 Oct - 23 Oct 2020',
                dueDate: '18 Oct 2020',
                amount: 280,
                status: 1
            },
            {
                id: '223K42322DD',
                period: 'Deluxe',
                issueDate: '20 Oct - 23 Oct 2020',
                dueDate: '18 Oct 2020',
                amount: 280,
                status: 2
            }
        ];

        this.setState({invoices: data});
    }

    searchSubmit(data) {
        // call to update reservations data
    }

    componentWillMount() {
        this.loadInvoices();
    }

    render() {
        return(
            <Content>
                <h1>Accounting</h1>
            
                <Search searchSubmit={(data) => this.searchSubmit(data)} />

                <Info>
                    <p>Showing 5 results per page</p>

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
                    data={this.state.invoices}
                />

                <Pagination>
                    <Page active>1</Page>
                    <Page>2</Page>
                    <Page>3</Page>
                    <Page>4</Page>
                </Pagination>
            </Content>
        )
    }
}

export default Accounting;