import React, {Component} from 'react';

import {Content, ContentHeader, SiteHeader, SiteContent, AddRatePop, RatePopInputs, RatePopDays, Day, RatePopButton} from './styles';

import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

import Select from 'react-select';
import selectStyles from './selectStyles';

import InputMask from 'react-input-mask';

import {FaEdit, FaPauseCircle, FaCalendarAlt, FaCaravan, FaDollarSign} from 'react-icons/fa';

import Table from './Table';

class Rate extends Component {
    constructor() {
        super();

        this.state = {
            sites: [],
            sitesTypes: [],
            addRate: false,
            newRate: {
                type: null,
                periodStart: null,
                periodEnd: null,
                days: {
                    mon: false,
                    tue: false,
                    wed: false,
                    thu: false,
                    fri: false,
                    sat: false,
                    sun: false
                }
            }
        }

        this.loadSites = this.loadSites.bind(this);
        this.addRate = this.addRate.bind(this);
        this.submitRate = this.submitRate.bind(this);
    }

    loadSites() {
        const data = [
            {
                name: 'Deluxe',
                data: [
                    {
                        title: 'Sites Status',
                        icons: true,
                        values: [1, 1, 1, 2, 2, 2, 3, 3, 3, 2, 2, 1, 1, 1, 2]
                    },
                    {
                        title: 'Sites Allotment',
                        values: [21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22]
                    },
                    {
                        title: 'Sites Booked',
                        values: [21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22]
                    },
                    {
                        title: 'Standard',
                        iconsOver: true,
                        values: [
                            {status: 1, value: 45},
                            {status: 1, value: 45},
                            {status: 2, value: 45},
                            {status: 3, value: 45},
                            {status: 1, value: 45},
                            {status: 1, value: 45},
                            {status: 1, value: 45},
                            {status: 4, value: 45},
                            {status: 4, value: 45},
                            {status: 4, value: 45},
                            {status: 1, value: 45},
                            {status: 1, value: 45},
                            {status: 2, value: 45},
                            {status: 2, value: 45},
                            {status: 1, value: 45}
                        ]
                    },
                    {
                        title: 'Flexi Saver',
                        iconsOver: true,
                        values: [
                            {status: 1, value: 45},
                            {status: 1, value: 45},
                            {status: 2, value: 45},
                            {status: 3, value: 45},
                            {status: 1, value: 45},
                            {status: 1, value: 45},
                            {status: 1, value: 45},
                            {status: 4, value: 45},
                            {status: 4, value: 45},
                            {status: 4, value: 45},
                            {status: 1, value: 45},
                            {status: 1, value: 45},
                            {status: 2, value: 45},
                            {status: 2, value: 45},
                            {status: 1, value: 45}
                        ]
                    },
                    {
                        title: 'Flash Sale',
                        iconsOver: true,
                        values: [
                            {status: 1, value: 45},
                            {status: 1, value: 45},
                            {status: 2, value: 45},
                            {status: 3, value: 45},
                            {status: 1, value: 45},
                            {status: 1, value: 45},
                            {status: 1, value: 45},
                            {status: 4, value: 45},
                            {status: 4, value: 45},
                            {status: 4, value: 45},
                            {status: 1, value: 45},
                            {status: 1, value: 45},
                            {status: 2, value: 45},
                            {status: 2, value: 45},
                            {status: 1, value: 45}
                        ]
                    }
                ]
            },
            {
                name: 'Premium',
                data: [
                    {
                        title: 'Sites Status',
                        icons: true,
                        values: [1, 1, 1, 2, 2, 2, 3, 3, 3, 2, 2, 1, 1, 1, 2]
                    },
                    {
                        title: 'Sites Allotment',
                        values: [21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22]
                    },
                    {
                        title: 'Sites Booked',
                        values: [21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22]
                    },
                    {
                        title: 'Standard',
                        iconsOver: true,
                        values: [
                            {status: 1, value: 45},
                            {status: 1, value: 45},
                            {status: 2, value: 45},
                            {status: 3, value: 45},
                            {status: 1, value: 45},
                            {status: 1, value: 45},
                            {status: 1, value: 45},
                            {status: 4, value: 45},
                            {status: 4, value: 45},
                            {status: 4, value: 45},
                            {status: 1, value: 45},
                            {status: 1, value: 45},
                            {status: 2, value: 45},
                            {status: 2, value: 45},
                            {status: 1, value: 45}
                        ]
                    },
                    {
                        title: 'Flexi Saver',
                        iconsOver: true,
                        values: [
                            {status: 1, value: 45},
                            {status: 1, value: 45},
                            {status: 2, value: 45},
                            {status: 3, value: 45},
                            {status: 1, value: 45},
                            {status: 1, value: 45},
                            {status: 1, value: 45},
                            {status: 4, value: 45},
                            {status: 4, value: 45},
                            {status: 4, value: 45},
                            {status: 1, value: 45},
                            {status: 1, value: 45},
                            {status: 2, value: 45},
                            {status: 2, value: 45},
                            {status: 1, value: 45}
                        ]
                    },
                    {
                        title: 'Flash Sale',
                        iconsOver: true,
                        values: [
                            {status: 1, value: 45},
                            {status: 1, value: 45},
                            {status: 2, value: 45},
                            {status: 3, value: 45},
                            {status: 1, value: 45},
                            {status: 1, value: 45},
                            {status: 1, value: 45},
                            {status: 4, value: 45},
                            {status: 4, value: 45},
                            {status: 4, value: 45},
                            {status: 1, value: 45},
                            {status: 1, value: 45},
                            {status: 2, value: 45},
                            {status: 2, value: 45},
                            {status: 1, value: 45}
                        ]
                    }
                ]
            }
        ];

        const sitesTypes = [
            {label: 'Deluxe', value: 'Deluxe'},
            {label: 'Premium', value: 'Premium'}
        ]

        this.setState({
            sites: data,
            sitesTypes: sitesTypes
        });
    }

    addRate(type, data) {
        const newRate = this.state.newRate;

        if (type == 'period') {
            newRate.periodStart = data[0];
            newRate.periodEnd = data[1];
        };

        if (type == 'type') {
            newRate.type = data.value;
        };

        if (type == 'day') {
            newRate.days[`${data}`] = !newRate.days[`${data}`];
        };

        this.setState({newRate: newRate});
    }

    submitRate() {
        const data = this.state.newRate;

        // API call to update rate data
    }

    componentWillMount() {
        this.loadSites();
    }

    render() {
        return(
            <Content>
                
                {this.state.addRate &&
                    <AddRatePop>
                        <h2>Add differential rate</h2>
                        <p>Rate differentials between site types</p>

                        <RatePopInputs>
                            <section>
                                <h3>Period</h3>
                                <FaCalendarAlt />
                                <p>
                                    {                            
                                        this.state.newRate.periodStart
                                        ? this.state.newRate.periodStart.toLocaleDateString('en-US')
                                        : null
                                    }

                                    {                            
                                        this.state.newRate.periodEnd
                                        ? ` - ${this.state.newRate.periodEnd.toLocaleDateString('en-US')}`
                                        : null
                                    }
                                </p>
                                <DatePicker
                                    onChange={date => this.setState({startDate: date[0], endDate: date[1]})}
                                    onChange={date => this.addRate('period', date)}
                                    startDate={this.state.newRate.periodStart}
                                    endDate={this.state.newRate.periodEnd}
                                    selectsRange
                                    shouldCloseOnSelect={false}
                                />
                            </section>
                            <section>
                                <h3>Site type</h3>
                                <FaCaravan />
                                <Select
                                    options={this.state.sitesTypes}
                                    styles={selectStyles}
                                    className='select-input'
                                    onChange={e => this.addRate('type', e)}
                                    placeholder=''
                                />
                            </section>
                            <section>
                                <h3>Price differential</h3>
                                <FaDollarSign />
                                <InputMask
                                    onChange={(e) => this.addRate('price', e.target.value)}
                                    mask="+99.99"
                                />
                            </section>
                        </RatePopInputs>

                        <RatePopDays>
                            <Day onClick={() => this.addRate('day', 'mon')} active={this.state.newRate.days.mon ? true : false}>MON</Day>
                            <Day onClick={() => this.addRate('day', 'tue')} active={this.state.newRate.days.tue ? true : false}>TUE</Day>
                            <Day onClick={() => this.addRate('day', 'wed')} active={this.state.newRate.days.wed ? true : false}>WED</Day>
                            <Day onClick={() => this.addRate('day', 'thu')} active={this.state.newRate.days.thu ? true : false}>THU</Day>
                            <Day onClick={() => this.addRate('day', 'fri')} active={this.state.newRate.days.fri ? true : false}>FRI</Day>
                            <Day onClick={() => this.addRate('day', 'sat')} active={this.state.newRate.days.sat ? true : false}>SAT</Day>
                            <Day onClick={() => this.addRate('day', 'sun')} active={this.state.newRate.days.sun ? true : false}>SUN</Day>
                        </RatePopDays>

                        <RatePopButton onClick={() => this.submitRate()}>SUBMIT</RatePopButton>
                    </AddRatePop>
                }

                <ContentHeader>
                    <h1>Price and Availability Calendar</h1>
                    <button onClick={() => this.setState({addRate: true})}>New rate plan</button>
                </ContentHeader>

                {this.state.sites.map(site => (
                    <SiteContent>
                        <SiteHeader>
                            <h3>{site.name}</h3>

                            <div>
                                <section>
                                    <FaEdit />
                                    <p>Edit</p>
                                </section>

                                <section>
                                    <FaPauseCircle />
                                    <p>Stop sale</p>
                                </section>
                            </div>
                        </SiteHeader>
                        <Table
                            data={site.data}
                        />
                    </SiteContent>
                ))}
            </Content>
        )
    }
}

export default Rate;