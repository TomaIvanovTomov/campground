import React, {Component} from 'react';

import {Content, Range, Checkbox, Filters, FilterOption, DateInput} from './styles';

import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import {FaCalendarAlt, FaStar} from 'react-icons/fa'

class Filter extends Component {
    constructor() {
        super();

        this.state = {
            filters: {
                places: false,
                campgrounds: false,
                thingsSee: false,
                thingsDo: false,
                all: true
            },
            distance: 10,
            startingDate: new Date(),
            endingDate: new Date()
        };

        this.selectFilter = this.selectFilter.bind(this);
    }

    selectFilter(filter) {
        const filters = this.state.filters;

        if (filter == 'places') {
            filters.places = !filters.places;
        }

        if (filter == 'campgrounds') {
            filters.campgrounds = !filters.campgrounds;
        }

        if (filter == 'thingsSee') {
            filters.thingsSee = !filters.thingsSee;
        }

        if (filter == 'thingsDo') {
            filters.thingsDo = !filters.thingsDo;
        }

        if (filter == 'all') {
            if (!filters.all) {
                filters.places = false;
                filters.campgrounds = false;
                filters.thingsSee = false;
                filters.thingsDo = false;
                filters.all = true;
            } else {
                filters.all = false;
            }
        }

        this.setState({filters: filters});
    }

    render() {
        return(
            <Content>
                <section>
                    <h2>Distance</h2>

                    <Range>
                        <Slider
                            min={1}
                            max={60}
                            value={this.state.distance}
                            handleLabel={this.state.distance ? `${this.state.distance.toString()} miles` : ''}
                            tooltip={false}
                            onChange={(e) => this.setState({distance: e})}
                        />
                    </Range>
                </section>

                <section>
                    <h2>Your budget</h2>

                    <Checkbox>
                        <section>
                            <input type='checkbox' name='budget' />
                            <p>$300 to $10000</p>
                        </section>

                        <p>22</p>
                    </Checkbox>

                    <Checkbox>
                        <section>
                            <input type='checkbox' name='budget' />
                            <p>$10000 to $25000</p>
                        </section>

                        <p>20</p>
                    </Checkbox>

                    <Checkbox>
                        <section>
                            <input type='checkbox' name='budget' />
                            <p>Gold</p>
                        </section>
                    </Checkbox>
                </section>

                <section>
                    <h2>Site type</h2>

                    <Checkbox>
                        <section>
                            <input type='checkbox' name='type' />
                            <p>Deluxe</p>
                        </section>
                    </Checkbox>

                    <Checkbox>
                        <section>
                            <input type='checkbox' name='type' />
                            <p>Platinum</p>
                        </section>
                    </Checkbox>

                    <Checkbox>
                        <section>
                            <input type='checkbox' name='type' />
                            <p>Gold</p>
                        </section>
                    </Checkbox>
                </section>

                <section>
                    <h2>Rating</h2>

                    <Checkbox>
                        <section>
                            <input type='checkbox' name='ratings' />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </section>

                        <p>13</p>
                    </Checkbox>

                    <Checkbox>
                        <section>
                            <input type='checkbox' name='ratings' />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </section>

                        <p>13</p>
                    </Checkbox>

                    <Checkbox>
                        <section>
                            <input type='checkbox' name='ratings' />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </section>

                        <p>13</p>
                    </Checkbox>

                    <Checkbox>
                        <section>
                            <input type='checkbox' name='ratings' />
                            <FaStar />
                            <FaStar />
                        </section>

                        <p>13</p>
                    </Checkbox>

                    <Checkbox>
                        <section>
                            <input type='checkbox' name='ratings' />
                            <FaStar />
                        </section>

                        <p>13</p>
                    </Checkbox>
                </section>

                <section>
                    <h2>Review score</h2>

                    <Checkbox>
                        <section>
                            <input type='checkbox' name='reviewScore' />
                            <p>Very good 8+</p>
                        </section>

                        <p>22</p>
                    </Checkbox>

                    <Checkbox>
                        <section>
                            <input type='checkbox' name='reviewScore' />
                            <p>Good 7+</p>
                        </section>

                        <p>20</p>
                    </Checkbox>

                    <Checkbox>
                        <section>
                            <input type='checkbox' name='reviewScore' />
                            <p>Pleasant 6+</p>
                        </section>

                        <p>13</p>
                    </Checkbox>

                    <Checkbox>
                        <section>
                            <input type='checkbox' name='reviewScore' />
                            <p>Fair 5+</p>
                        </section>

                        <p>13</p>
                    </Checkbox>

                    <Checkbox>
                        <section>
                            <input type='checkbox' name='reviewScore' />
                            <p>Poor 4+</p>
                        </section>

                        <p>13</p>
                    </Checkbox>
                </section>

                <section>
                    <h2>Distance from city center</h2>

                    <Checkbox>
                        <section>
                            <input type='checkbox' name='distance' />
                            <p>Less than 1km</p>
                        </section>

                        <p>22</p>
                    </Checkbox>

                    <Checkbox>
                        <section>
                            <input type='checkbox' name='distance' />
                            <p>Less than 2km</p>
                        </section>

                        <p>20</p>
                    </Checkbox>

                    <Checkbox>
                        <section>
                            <input type='checkbox' name='distance' />
                            <p>Less than 3km</p>
                        </section>

                        <p>13</p>
                    </Checkbox>

                    <Checkbox>
                        <section>
                            <input type='checkbox' name='distance' />
                            <p>Less than 4km</p>
                        </section>

                        <p>13</p>
                    </Checkbox>

                    <Checkbox>
                        <section>
                            <input type='checkbox' name='distance' />
                            <p>Less than 5km</p>
                        </section>

                        <p>13</p>
                    </Checkbox>
                </section>

                <section>
                    <h2>Features</h2>

                    <Checkbox>
                        <section>
                            <input type='checkbox' name='features' />
                            <p>Swimming pool</p>
                        </section>

                        <p>22</p>
                    </Checkbox>

                    <Checkbox>
                        <section>
                            <input type='checkbox' name='features' />
                            <p>Barbecue</p>
                        </section>

                        <p>20</p>
                    </Checkbox>

                    <Checkbox>
                        <section>
                            <input type='checkbox' name='features' />
                            <p>Free Wi-Fi</p>
                        </section>

                        <p>13</p>
                    </Checkbox>
                </section>

                <section>
                    <h2>Filter by</h2>

                    <Filters>
                        <FilterOption
                            onClick={() => this.selectFilter('places')}
                            selected={this.state.filters.places ? true : false}
                        >
                        Places to stay
                        </FilterOption>
                        
                        <FilterOption
                            onClick={() => this.selectFilter('campgrounds')}
                            selected={this.state.filters.campgrounds ? true : false}
                        >
                        Campgrounds
                        </FilterOption>
                        
                        <FilterOption
                            onClick={() => this.selectFilter('thingsSee')}
                            selected={this.state.filters.thingsSee ? true : false}
                        >
                        Things to see
                        </FilterOption>
                        
                        <FilterOption
                            onClick={() => this.selectFilter('thingsDo')}
                            selected={this.state.filters.thingsDo ? true : false}
                        >
                        Things to do
                        </FilterOption>
                        
                        <FilterOption
                            onClick={() => this.selectFilter('all')}
                            selected={this.state.filters.all ? true : false}
                        >
                        All
                        </FilterOption>
                    </Filters>
                </section>

                <section>
                    <h2>Number of guests</h2>

                    <select>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </section>

                <section>
                    <h2>Date of booking</h2>

                    <DateInput>
                        <p>From</p>
                        <FaCalendarAlt />

                        <DatePicker
                            selected={this.state.startingDate}
                            onChange={date => this.setState({startingDate: date})}
                            className="date-input"
                        />
                    </DateInput>

                    <DateInput>
                        <p>To</p>
                        <FaCalendarAlt />

                        <DatePicker
                            selected={this.state.endingDate}
                            onChange={date => this.setState({endingDate: date})}
                            className="date-input"
                        />
                    </DateInput>
                </section>
            </Content>
        )
    }
}

export default Filter;