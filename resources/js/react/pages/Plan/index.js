import React, {Component} from 'react';
import Select from 'react-select'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {FaCalendarAlt, FaTimesCircle, FaPlusCircle, FaMapMarkerAlt, FaSearch} from 'react-icons/fa'

import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

import { Scrollbars } from 'react-custom-scrollbars';

import {Content, Form, CleanInput, Leg, LegControls, ContentHeader, HeaderTitle, Results} from './styles';
import selectStyles from './selectInputStyles';

import Map from '../../components/Map';
import SearchLocation from '../../components/SearchLocation';

import PageHeader from '../../components/Header';
import PageFooter from '../../components/Footer';
import {SanctumContext} from "react-sanctum";
import { withRouter } from 'react-router-dom';

class Plan extends Component {

    static contextType = SanctumContext;

    constructor(props) {
        super(props);

        const params = new URLSearchParams(props.location.search);
        const starting = params.get('starting');
        const destination = params.get('destination');

        this.state = {
            modeSelection: 'plan',
            logged: false,
            openModal: false,
            trip_id: null,
            trip: {
                name: '',
                description: '',
                starting: starting ? starting : '',
                startingDate: null,
                destination: destination ? destination : '',
                destinationDate: null,
                legs: [{
                    place: '',
                    startingDate: null,
                    endingDate: null
                }]
            },
            options: [
                { value: 'Chicago', label: 'Chicago' },
                { value: 'Los Angeles', label: 'Los Angeles' },
                { value: 'San Francisco', label: 'San Francisco' }
            ],
            thingsToExplore: [
                {id: 1, bookable: true, title: 'Marvel Park', description: '9770 SW County Road 769 Beverly Hills, USA', review: 5},
                {id: 2, bookable: false, title: 'Joshua Tree National Park', description: '9770 SW County Road 769 Beverly Hills, USA', review: 4},
                {id: 3, bookable: false, title: 'Palouse Falls', description: '9770 SW County Road 769 Beverly Hills, USA', review: 3},
                {id: 4, bookable: false, title: 'Long Island Sky Diving', description: '9770 SW County Road 769 Beverly Hills, USA', review: 2},
                {id: 5, bookable: false, title: 'Long Island Sky Diving', description: '9770 SW County Road 769 Beverly Hills, USA', review: 2},
                {id: 6, bookable: false, title: 'Long Island Sky Diving', description: '9770 SW County Road 769 Beverly Hills, USA', review: 2},
                {id: 7, bookable: false, title: 'Long Island Sky Diving', description: '9770 SW County Road 769 Beverly Hills, USA', review: 2},
                {id: 8, bookable: false, title: 'Long Island Sky Diving', description: '9770 SW County Road 769 Beverly Hills, USA', review: 2},
                {id: 9, bookable: false, title: 'Long Island Sky Diving', description: '9770 SW County Road 769 Beverly Hills, USA', review: 2},
                {id: 10, bookable: false, title: 'Long Island Sky Diving', description: '9770 SW County Road 769 Beverly Hills, USA', review: 2},
            ]
        };

        this.updateTrip = this.updateTrip.bind(this);
        this.addLeg = this.addLeg.bind(this);
        this.updateLeg = this.updateLeg.bind(this);
        this.removeLeg = this.removeLeg.bind(this);
        this.saveTrip = this.saveTrip.bind(this);
        this.submit = this.submit.bind(this);
    }

    updateTrip(field, value) {
        const legs = this.state.trip.legs;
        const newTrip = {
            name: field == 'name' ? value : this.state.trip.name,
            description: field == 'description' ? value : this.state.trip.description,
            starting: field == 'starting' ? value.description : this.state.trip.starting,
            startingDate: field == 'startingDate' ? value : this.state.trip.startingDate,
            destination: field == 'destination' ? value.description : this.state.trip.destination,
            destinationDate: field == 'destinationDate' ? value : this.state.trip.destinationDate,
            legs: legs
        }

        this.setState({trip: newTrip});
    }

    addLeg(e) {
        e.preventDefault();

        const legs = this.state.trip.legs;
        legs.push({
            place: '',
            startingDate: null,
            endingDate: null
        });

        const newTrip = {
            name: this.state.trip.name,
            description: this.state.trip.description,
            starting: this.state.trip.starting,
            startingDate: this.state.trip.startingDate,
            destination: this.state.trip.destination,
            destinationDate: this.state.trip.destinationDate,
            legs: legs
        }

        this.setState({trip: newTrip})
    }

    updateLeg(field, value, index) {
        let legs = this.state.trip.legs;

        legs[index].place = field == 'place' ? value.description : legs[index].place;
        legs[index].startingDate = field == 'startingDate' ? value : legs[index].startingDate;
        legs[index].endingDate = field == 'endingDate' ? value : legs[index].endingDate;

        const newTrip = {
            name: this.state.trip.name,
            description: this.state.trip.description,
            starting: this.state.trip.starting,
            startingDate: this.state.trip.startingDate,
            destination: this.state.trip.destination,
            destinationDate: this.state.trip.destinationDate,
            legs: legs
        }


        console.log(newTrip);

        this.setState({trip: newTrip})
    }

    removeLeg(e, index) {
        e.preventDefault();

        const legs = this.state.trip.legs;
        legs.splice(index, 1);

        const newTrip = {
            name: this.state.trip.name,
            description: this.state.trip.description,
            starting: this.state.trip.starting,
            startingDate: this.state.trip.startingDate,
            destination: this.state.trip.destination,
            destinationDate: this.state.trip.destinationDate,
            legs: legs
        }

        this.setState({trip: newTrip})
    }

    saveTrip(e) {
        e.preventDefault();

        if (!this.state.logged) {
            this.setState({openModal: true});
            return;
        }

        //Save trip on database and return ID

        this.setState({trip_id: 1}) // place ID on trip_id
    }

    async componentDidMount() {

        if (!this.context.user)
            this.props.history.push("/login")

        let params = new URLSearchParams(window.location.search);

        if (params.get('id')) {
            await axios.get(`/api/v1/edit-trip/${params.get('id')}`)
                .then(response => {
                    const trip = response.data
                    let newTrip = {
                        name: trip.name,
                        description: trip.description,
                        starting: trip.start,
                        startingDate: new Date(trip.start_date + " 00:00"),
                        destination: trip.end,
                        destinationDate: new Date(trip.end_date + " 00:00"),
                    }
                    if (trip.legs.length != 0) {
                        trip.legs.map(leg => {
                            leg.start_date = new Date(leg.start_date + " 00:00")
                            leg.end_date = new Date(leg.end_date + " 00:00")
                        })
                    }
                    newTrip.legs = trip.legs
                    this.setState({trip: newTrip}, function () {
                        console.log(this.state.trip)
                    })
                })
        } else {
            let starting = params.get('starting');
            let ending = params.get('ending');

            if (starting && ending) {
                const newTrip = {
                    name: null,
                    description: null,
                    starting: starting,
                    startingDate: null,
                    destination: ending,
                    destinationDate: null,
                    legs: [{
                        place: '',
                        startingDate: null,
                        endingDate: null
                    }]
                }

                this.setState({trip: newTrip})
            }
        }

    }

    submit(e) {
        e.preventDefault()
        let params = new URLSearchParams(window.location.search);
        axios.post('/api/v1/save-trip', {
            trip: {
                id: params.get('id'),
                name: this.state.trip.name,
                description: this.state.trip.description,
                start: this.state.trip.starting,
                end: this.state.trip.destination,
                start_date: this.state.trip.startingDate,
                end_date: this.state.trip.destinationDate,
                user_id: this.context.user.id
            },
            legs: this.state.trip.legs
        })
            .then(response => {
                this.props.history.push('/trips');
            })
            .catch(err => {
                toast.error(err.message)
            })
    }

    render() {
        return(
            <>
                <PageHeader internal />
                <Content>
                    <ContentHeader>
                        <HeaderTitle onClick={() => this.setState({modeSelection: 'plan'})} selected={this.state.modeSelection == 'plan' ? true: false}>Plan your trip</HeaderTitle>
                        <HeaderTitle onClick={() => this.setState({modeSelection: 'explore'})} selected={this.state.modeSelection == 'explore' ? true: false}>Things to explore</HeaderTitle>
                    </ContentHeader>

                    {this.state.modeSelection == 'plan' &&
                    <>
                        <Scrollbars
                            style={{ width: '100%', height: 1010 }}
                            renderThumbVertical={props => <div {...props} style={{backgroundColor: '#ff8913'}} />}
                        >
                            <Form>
                                <form onSubmit={(e) => this.submit(e)}>
                                    <section>
                                        <p>Starting</p>
                                        <FaMapMarkerAlt />
                                        <GooglePlacesAutocomplete
                                            apiKey="AIzaSyDz0DiCpoEtBSOCzpqmv_LNACn2GsW7EhY"
                                            selectProps={{
                                                placeholder: this.state.trip.starting ? this.state.trip.starting : 'Select...',
                                                onChange: e => this.updateTrip('starting', e.value),
                                                styles: selectStyles
                                            }}
                                        />
                                    </section>

                                    <section>
                                        <p>Date</p>
                                        <FaCalendarAlt />
                                        <DatePicker
                                            selected={this.state.trip.startingDate}
                                            onChange={date => this.updateTrip('startingDate', date)}
                                            className="date-input"
                                        />
                                    </section>

                                    {this.state.trip.legs.map((leg, index) => (
                                        <>
                                            <Leg>
                                                <p>Leg</p>
                                                <FaMapMarkerAlt />
                                                <GooglePlacesAutocomplete
                                                    apiKey="AIzaSyDz0DiCpoEtBSOCzpqmv_LNACn2GsW7EhY"
                                                    selectProps={{
                                                        placeholder: leg.destination ? leg.destination : 'Select...',
                                                        onChange: e => this.updateLeg('place', e.value, index),
                                                        styles: selectStyles
                                                    }}
                                                />
                                            </Leg>

                                            <Leg half>
                                                <p>Check-in</p>
                                                <FaCalendarAlt size={25} color={'#333C39'} />
                                                <DatePicker
                                                    selected={leg.start_date ? leg.start_date : leg.startingDate}
                                                    onChange={date => this.updateLeg('startingDate', date, index)}
                                                    className="date-input"
                                                />
                                            </Leg>

                                            <Leg half>
                                                <p>Check-out</p>
                                                <FaCalendarAlt size={25} color={'#333C39'} />
                                                <DatePicker
                                                    selected={leg.end_date ? leg.end_date : leg.endingDate}
                                                    onChange={date => this.updateLeg('endingDate', date, index)}
                                                    className="date-input"
                                                />

                                                <LegControls>
                                                    {index > 0 &&
                                                    <FaTimesCircle onClick={e => this.removeLeg(e, index)} />
                                                    }

                                                    {index == this.state.trip.legs.length - 1 &&
                                                    <FaPlusCircle onClick={e => this.addLeg(e)} />
                                                    }
                                                </LegControls>
                                            </Leg>
                                        </>
                                    ))}

                                    <section>
                                        <p>Destination</p>
                                        <FaMapMarkerAlt />
                                        <GooglePlacesAutocomplete
                                            apiKey="AIzaSyDz0DiCpoEtBSOCzpqmv_LNACn2GsW7EhY"
                                            selectProps={{
                                                placeholder: this.state.trip.destination ? this.state.trip.destination : 'Select...',
                                                onChange: e => this.updateTrip('destination', e.value),
                                                styles: selectStyles
                                            }}
                                        />
                                    </section>

                                    <section>
                                        <p>Date</p>
                                        <FaCalendarAlt />
                                        <DatePicker
                                            selected={this.state.trip.destinationDate}
                                            onChange={date => this.updateTrip('destinationDate', date)}
                                            className="date-input"
                                        />
                                    </section>

                                    <section>
                                        <p>Title</p>
                                        <CleanInput
                                            type="text"
                                            value={this.state.trip.name}
                                            onChange={e => this.updateTrip('name', e.target.value)}
                                        />
                                    </section>

                                    <section>
                                        <p>Description</p>
                                        <textarea
                                            value={this.state.trip.description}
                                            onChange={e => this.updateTrip('description', e.target.value)}>
                                    </textarea>
                                    </section>

                                    <button type="submit">Plan trip</button>
                                </form>
                            </Form>
                        </Scrollbars>
                    </>
                    }

                    {this.state.modeSelection == 'explore' &&
                    <Form>
                        <form>
                            <section>
                                <p>Location</p>
                                <FaMapMarkerAlt />
                                <Select
                                    options={this.state.options}
                                    styles={selectStyles}
                                    onChange={e => this.updateTrip('starting', e.value)}
                                    className='select-input'
                                    placeholder=''
                                />
                            </section>

                            <section>
                                <p>Search</p>
                                <FaSearch />
                                <input type="text" />
                            </section>

                            <Scrollbars
                                style={{ width: '100%', height: 735 }}
                                renderThumbVertical={props => <div {...props} style={{backgroundColor: '#ff8913'}} />}
                            >
                                <Results>
                                    {this.state.thingsToExplore.map(thing => (
                                        <SearchLocation key={thing.id} data={thing} />
                                    ))}
                                </Results>
                            </Scrollbars>
                        </form>
                    </Form>
                    }
                </Content>

                <Map
                    origin={this.state.trip.starting}
                    destination={this.state.trip.destination}
                    legs={this.state.trip}
                />
                <PageFooter />
            </>
        )
    }
}

export default withRouter(Plan);
