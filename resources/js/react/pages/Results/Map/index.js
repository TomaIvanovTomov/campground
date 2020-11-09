import React, {Component} from 'react';
import {} from 'react-icons/fa'

import { Scrollbars } from 'react-custom-scrollbars';

import {Content, Form, ContentHeader, Results} from './styles';

import Map from './MapRenderer';
import SearchLocation from '../../../components/SearchLocation';

import Filter from '../Filter';

class MapView extends Component {
    constructor() {
        super();

        this.state = {
            filter: false
        }
    }

    render() {
        return(
            <>              
            <Content>
                <ContentHeader>
                    <h2>42 properties found</h2>

                    <button onClick={() => this.setState({filter: !this.state.filter})}>Filter</button>
                </ContentHeader>
                {!this.state.filter &&
                    <Form>
                        <form>                        
                            <Scrollbars
                                style={{ width: '100%', height: 1200 }}
                                renderThumbVertical={props => <div {...props} style={{backgroundColor: '#ff8913'}} />}
                            >
                            <Results>
                                    {this.props.data.map(result => (
                                        <SearchLocation showLocation key={result.id} data={result} />
                                    ))}
                            </Results> 
                            </Scrollbars>                   
                        </form>
                    </Form>
                }
                
                {this.state.filter &&
                    <Filter />
                }
            </Content>

            <Map />
            </>
        )
    }
}

export default MapView;