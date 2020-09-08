import React, {Component} from 'react';

import {Content, ContentHeader, SiteHeader, SiteContent} from './styles';

import {FaEdit, FaPauseCircle} from 'react-icons/fa';

import Table from './Table';

class Rate extends Component {
    constructor() {
        super();

        this.state = {
            sites: []
        }

        this.loadSites = this.loadSites.bind(this);
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

        this.setState({sites: data});
    }

    componentWillMount() {
        this.loadSites();
    }

    render() {
        return(
            <Content>
                <ContentHeader>
                    <h1>Price and Availability Calendar</h1>
                    <button>New rate plan</button>
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