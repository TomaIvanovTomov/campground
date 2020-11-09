import React, {Component} from 'react';

import {Content, FilterSidebar, Properties} from './styles';

import FullSearchLocation from '../../../components/FullSearchLocation';

import Filter from '../Filter';

class ListView extends Component {

    render() {
        return(
            <Content>
                <FilterSidebar>
                    <Filter />
                </FilterSidebar>

                <Properties>
                    {this.props.data.map(result => (
                        <FullSearchLocation data={result} />
                    ))}
                </Properties>
            </Content>
        )
    }
}

export default ListView;