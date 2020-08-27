import React, {Component} from 'react';
import InputMask from 'react-input-mask';
import Select from 'react-select';
import {FaCloudUploadAlt} from 'react-icons/fa'

import selectStyles from '../../../styles/selectInputStyles';

import {Content, Half, Form, ImageInput, ImagePreview, HalfInput, Controls, Span} from './styles';

import Location from './Location';
import {SanctumContext} from "react-sanctum";

class PropertyInformation extends Component {

    static contextType = SanctumContext;

    constructor(props) {
        super(props);

        this.state = {
            pname: null,
            image: null,
            imageURL: null,
            email: null,
            website: null,
            fax: null,
            phone: null,
            checkin: null,
            checkout: null,
            address: null,
            country: null,
            state: null,
            city: null,
            latitude: null,
            longitude: null,
            countries: null
        }

        this.loadCountries = this.loadCountries.bind(this);
        this.updateImage = this.updateImage.bind(this);
        this.updateCountry = this.updateCountry.bind(this);
        this.updateState = this.updateState.bind(this);
        this.submit = this.submit.bind(this);
    }

    async loadCountries() {
        await axios.get("/api/v1/countries").then(response => {
            this.setState({countries: response.data});
        })
        .catch(err => {
            message("error", "Countries couldn't be loaded")
        })
    }

    updateImage(image) {
        const reader = new FileReader();
        const url = reader.readAsDataURL(image);

        reader.onloadend = () => {
            this.setState({
                imageURL: [reader.result]
            })
        };
    }

    async updateCountry(selection) {
        await axios.get("/api/v1/states/"+selection.value).then(response => {
            this.setState({
                country: selection.value,
                states: response.data
            });
        })
        .catch(err => {
            message("error", "States couldn't be loaded")
        })
    }

    async updateState(selection) {
        await axios.get("/api/v1/cities/"+selection.value).then(response => {
            this.setState({
                state: selection.value,
                cities: response.data
            });
        })
        .catch(err => {
            message("error", "Cities couldn't be loaded")
        })
    }

    submit(e) {
        e.preventDefault();
        const images = e.target.files
        let form = new FormData()
        form.append("image", images)
        axios.post("/api/v1/set-information", {
            user_id: 14,
            name: this.state.pname,
            imageUrl: this.state.imageUrl,
            email: this.state.email,
            website: this.state.website,
            phone: this.state.phone,
            fax: this.state.fax,
            check_in: this.state.checkin,
            check_out: this.state.checkout,
            address: this.state.address,
            country: this.state.country,
            state: this.state.state,
            city: this.state.city,
            zip: this.state.zip,
            lat: this.state.latitude,
            long: this.state.longitude,
        })
        .then(response => {
            if (response.status === 200) {
                this.context.property = response.data.id
                this.props.nextStep(this.state);
            }
        })
        .catch(err => {
            if (err.response.status === 422) {
                message("error", err.response.message)
            }
        })
    }

    componentDidMount() {
        this.loadCountries();
    }

    render() {
        return(
            <Content>
                <Form>
                    <form onSubmit={(e) => this.submit(e)}>
                        <Half>
                            <p>Property Name*</p>
                            <input onChange={(e) => this.setState({pname: e.target.value})} required></input>

                            {!this.state.imageURL &&
                            <ImageInput>
                                <FaCloudUploadAlt />
                                <p>Upload main image</p>
                                <input type="file" value={this.state.image} onChange={e => this.updateImage(e.target.files[0])} />
                            </ImageInput>
                            }

                            {this.state.imageURL &&
                            <ImagePreview>
                                <img src={this.state.imageURL} />
                                <p onClick={() => this.setState({image: null, imageURL: null})}>Remove</p>
                            </ImagePreview>
                            }

                            <p>E-mail</p>
                            <input onChange={(e) => this.setState({email: e.target.value})}></input>

                            <p>Website</p>
                            <input onChange={(e) => this.setState({website: e.target.value})}></input>

                            <section>
                                <HalfInput>
                                    <p>Phone number*</p>
                                    <InputMask
                                        onChange={(e) => this.setState({phone: e.target.value})}
                                        required
                                        mask="+999 99 999 99"
                                        alwaysShowMask
                                        maskChar="_"
                                    />
                                </HalfInput>
                                <HalfInput>
                                    <p>Fax</p>
                                    <InputMask
                                        onChange={(e) => this.setState({fax: e.target.value})}
                                        required
                                        mask="+999 99 999 99"
                                        alwaysShowMask
                                        maskChar="_"
                                    />
                                </HalfInput>
                            </section>

                            <section>
                                <HalfInput>
                                    <p>Check-in*</p>
                                    <InputMask
                                        onChange={(e) => this.setState({checkin: e.target.value})}
                                        required
                                        mask="99:99"
                                        alwaysShowMask
                                        maskChar="_"
                                    />
                                </HalfInput>

                                <HalfInput>
                                    <p>Check-out*</p>
                                    <InputMask
                                        onChange={(e) => this.setState({checkout: e.target.value})}
                                        required
                                        mask="99:99"
                                        alwaysShowMask
                                        maskChar="_"
                                    />
                                </HalfInput>
                            </section>
                        </Half>
                        <Half>
                            <p>Address*</p>
                            <input onChange={e => this.setState({address: e.value})} required></input>

                            <section>
                                <HalfInput>
                                    <p>Country*</p>
                                    <Select
                                        options={this.state.countries}
                                        styles={selectStyles}
                                        onChange={e => this.updateCountry(e)}
                                        placeholder=''
                                    />
                                </HalfInput>

                                <HalfInput>
                                    <p>State*</p>
                                    <Select
                                        options={this.state.states}
                                        styles={selectStyles}
                                        onChange={e => this.updateState(e)}
                                        placeholder=''
                                    />
                                </HalfInput>
                            </section>

                            <section>
                                <HalfInput>
                                    <p>City*</p>
                                    <Select
                                        options={this.state.cities}
                                        styles={selectStyles}
                                        onChange={e => this.setState({city: e.value})}
                                        placeholder=''
                                    />
                                </HalfInput>

                                <HalfInput>
                                    <p>Zip*</p>
                                    <input onChange={(e) => this.setState({zip: e.target.value})} required></input>
                                </HalfInput>
                            </section>

                            <section>
                                <HalfInput>
                                    <p>Latitude</p>
                                    <input onChange={(e) => this.setState({latitude: e.target.value})}></input>
                                </HalfInput>

                                <HalfInput>
                                    <p>Longitude</p>
                                    <input onChange={(e) => this.setState({longitude: e.target.value})}></input>
                                </HalfInput>
                            </section>

                            <Location
                                address={`${this.state.country}, ${this.state.state}, ${this.state.city}, `}
                            />

                            <Controls>
                                <Span disabled>Previous</Span>
                                <Span onClick={() => this.props.saveDraft(this.state)}>Save as draft</Span>

                                <button>Proceed</button>
                            </Controls>
                        </Half>
                    </form>
                </Form>
            </Content>
        )
    }
}

export default PropertyInformation;
