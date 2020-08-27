import React, {Component} from 'react';

import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

import Select from 'react-select';
import selectStyles from '../selectStyles';

import {FaSearch, FaCalendarAlt} from 'react-icons/fa';

import {Content, Block, Section, Button} from './styles';

class Search extends Component {
    constructor() {
        super();

        this.state = {
            keyword: null,
            startDate: null,
            endDate: null,
            optionsStatus: [],
            status: [],
            optionsSites: [],
            sites: []
        }

        this.selectStatus = this.selectStatus.bind(this);
        this.selectSites = this.selectSites.bind(this);
        this.applySearch = this.applySearch.bind(this);
    }

    selectStatus(selected) {
        const status = [];

        if (selected)
            selected.map(select => {
                status.push(select.value);
            });

        this.setState({status: status});
    }

    selectSites(selected) {
        const sites = [];

        if (selected)
            selected.map(select => {
                sites.push(select.value);
            });

        this.setState({sites: sites});
    }

    applySearch() {
        const search = {
            keyword: this.state.keyword,
            startDate: this.state.startDate,
            endDate: this.state.endDate,
            status: this.state.status,
            sites: this.state.sites,
        };

        this.props.searchSubmit(search);
    }

    componentWillMount() {
        const status = [
            {value: 'confirmed', label: 'Confirmed'},
            {value: 'expired', label: 'Expired'},
            {value: 'cancelled', label: 'Cancelled'}
        ];

        const sites = [
            {value: 'premium', label: 'Premium'},
            {value: 'deluxe', label: 'Deluxe'}
        ];

        this.setState({
            optionsStatus: status,
            optionsSites: sites
        });
    }

    render() {
        return(
            <Content>
                <Block>
                    <h1>SEARCH BY KEYWORDS</h1>
                    <Section>
                        <FaSearch />
                        <input
                            onChange={e => this.setState({keyword: e.target.value})}
                            placeholder='Eg. travellor name/booking ID'
                        />
                    </Section>
                </Block>
                <Block>
                    <h1>RESERVATION DATES</h1>
                    <Section>
                        <FaCalendarAlt />
                        <p>
                            {                            
                                this.state.startDate
                                ? this.state.startDate.toLocaleDateString('en-US')
                                : null
                            }

                            {                            
                                this.state.endDate
                                ? ` - ${this.state.endDate.toLocaleDateString('en-US')}`
                                : null
                            }
                        </p>
                        <DatePicker
                            onChange={date => this.setState({startDate: date[0], endDate: date[1]})}
                            startDate={this.state.startDate}
                            endDate={this.state.endDate}
                            selectsRange
                            shouldCloseOnSelect={false}
                        />
                    </Section>
                </Block>
                <Block>
                    <h1>STATUS</h1>
                    <Section selection>
                        <Select
                            options={this.state.optionsStatus}
                            styles={selectStyles}
                            onChange={e => this.selectStatus(e)}
                            placeholder=''
                            isMulti
                        />
                    </Section>
                </Block>
                <Block>
                    <h1>SITE TYPE</h1>
                    <Section selection>
                        <Select
                            options={this.state.optionsSites}
                            styles={selectStyles}
                            onChange={e => this.selectSites(e)}
                            placeholder=''
                            isMulti
                        />
                    </Section>
                </Block>
                <Button onClick={() => this.applySearch()}>APPLY</Button>
            </Content>
        )
    }
}

export default Search;