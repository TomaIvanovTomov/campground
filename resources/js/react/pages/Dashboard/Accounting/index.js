import React, {Component} from 'react';

import {FaPrint, FaFileDownload} from 'react-icons/fa';

import {Content, Info, Pagination, Page} from './styles';
import {toast} from "react-toastify";

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

    async loadInvoices() {
        await axios.get("/api/v1/get-accountings")
        .then((response) => {
            this.setState({invoices: response.data});
        })
        .catch((err) => {
            toast.message(err)
        })
    }

    searchSubmit(data) {
        axios.post("/api/v1/search-accountings", {
            data: data
        })
            .then(response => {
                this.setState({invoices: response.data})
            })
            .catch(response => {
                toast.error(response.data.message)
            })
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
