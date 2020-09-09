import React, {Component} from 'react';

import Select from 'react-select';
import selectStyles from '../selectStyles';

import {FaSearch} from 'react-icons/fa';

import {Content, Block, Section, Button} from './styles';

class Search extends Component {
    constructor() {
        super();

        this.state = {
            keyword: null,
            optionsStatus: [],
            status: [],
            optionsYears: [],
            years: []
        }

        this.selectStatus = this.selectStatus.bind(this);
        this.selectYears = this.selectYears.bind(this);
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

    selectYears(selected) {
        const years = [];

        if (selected)
            selected.map(select => {
                years.push(select.value);
            });

        this.setState({years: years});
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
            {value: 'paid', label: 'Paid'},
            {value: 'unpaid', label: 'Unpaid'}
        ];

        const years = [
            {value: '2020', label: '2020'},
            {value: '2019', label: '2019'}
        ];

        this.setState({
            optionsStatus: status,
            optionsYears: years
        });
    }

    render() {
        return(
            <Content>
                <Block>
                    <h1>SEARCH BY INVOICE</h1>
                    <Section>
                        <FaSearch />
                        <input
                            onChange={e => this.setState({keyword: e.target.value})}
                            placeholder='Invoice number'
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
                {/*<Block>
                    <h1>YEAR</h1>
                    <Section selection>
                        <Select
                            options={this.state.optionsYears}
                            styles={selectStyles}
                            onChange={e => this.selectYears(e)}
                            placeholder=''
                            isMulti
                        />
                    </Section>
                </Block>*/}
                <Button onClick={() => this.applySearch()}>APPLY</Button>
            </Content>
        )
    }
}

export default Search;
