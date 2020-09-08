import React, {Component} from 'react';

import {Content, IconTD, IconOverTD} from './styles';

import {FaCircle, FaExclamationTriangle} from 'react-icons/fa';

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
                    {this.props.data.map(info => (
                        <>
                            {info.icons &&
                                <tr>
                                    <th>{info.title}</th>
                                    {info.values.map(value => (
                                        <>
                                            {value == 1 &&
                                                <IconTD><FaCircle /></IconTD>
                                            }

                                            {value == 2 &&
                                                <IconTD alert><FaCircle /></IconTD>
                                            }

                                            {value == 3 &&
                                                <IconTD><FaExclamationTriangle /></IconTD>
                                            }
                                        </>
                                    ))}
                                </tr>
                            }

                            {info.iconsOver &&
                                <tr>
                                    <th>{info.title}</th>
                                    {info.values.map(data => (
                                        <>
                                            {data.status == 1 &&
                                                <IconOverTD>
                                                    <span>{data.value}</span>
                                                    <FaCircle />
                                                </IconOverTD>
                                            }

                                            {data.status == 2 &&
                                                <IconOverTD alert>
                                                    <span>{data.value}</span>
                                                    <FaCircle />
                                                </IconOverTD>
                                            }

                                            {data.status == 3 &&
                                                <IconOverTD>
                                                    <span>{data.value}</span>
                                                    <FaExclamationTriangle />
                                                </IconOverTD>
                                            }

                                            {data.status == 4 &&
                                                <IconOverTD caution>
                                                    <span>{data.value}</span>
                                                    <FaCircle />
                                                </IconOverTD>
                                            }
                                        </>
                                    ))}
                                </tr>
                            }

                            {!info.icons && !info.iconsOver &&
                                <tr>
                                    <th>{info.title}</th>
                                    {info.values.map(value => (
                                        <td>{value}</td>
                                    ))}
                                </tr>
                            }
                        </>
                    ))}
                </table>                
            </Content>
        )
    }
}

export default Table;