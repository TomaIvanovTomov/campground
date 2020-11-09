import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import Select from 'react-select'
import selectStyles from './selectInputStyles';

import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

import {Content} from './styles';
import {SanctumContext} from "react-sanctum";

class HeaderPlan extends Component {

    static contextType = SanctumContext;

    constructor(props) {
        super(props);

        this.state = {
            starting: null,
            ending: null
        }
    }

    render() {
        return(
            <Content>
                <GooglePlacesAutocomplete
                    apiKey="AIzaSyDz0DiCpoEtBSOCzpqmv_LNACn2GsW7EhY"
                    selectProps={{
                        placeholder: 'STARTING',
                        onChange: e => this.setState({starting: e.value.description}),
                        styles: selectStyles
                    }}
                />

                <span>|</span>

                <GooglePlacesAutocomplete
                    apiKey="AIzaSyDz0DiCpoEtBSOCzpqmv_LNACn2GsW7EhY"
                    selectProps={{
                        placeholder: 'ENDING',
                        onChange: e => this.setState({ending: e.value.description}),
                        styles: selectStyles
                    }}
                />

                <Link to={`/plan?starting=${this.state.starting}&ending=${this.state.ending}`}><button>Plan Trip</button></Link>
            </Content>
        )
    }
}

export default HeaderPlan;
