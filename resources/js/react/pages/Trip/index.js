import React, {Component} from 'react';

import {Content, ContentHeader, TripContent, Sidebar, Legs, Leg, LegHeader, Buttons, LegInfo, LegImages, LegSection, Share} from './styles';

import {FaCopy, FaFacebookF, FaMapMarkerAlt, FaTwitter} from 'react-icons/fa';

import BackButtom from '../../components/BackButtom';
import Stars from '../../components/Stars';
import PageHeader from '../../components/Header';
import PageFooter from '../../components/Footer';

import ReviewModal from '../../modals/Review';

import Img from '../../assets/camping.jpg';
import {SanctumContext} from "react-sanctum";
import {func} from "prop-types";

class Trip extends Component {

    static contextType = SanctumContext;

    constructor(props) {
        super(props);

        this.state = {
            trip: [],
            review_leg_id: null
        };

        this.loadTrip = this.loadTrip.bind(this);
        this.submitReview = this.submitReview.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    submitReview(review, description) {
        axios.post('/api/v1/set-review', {
            rating: review,
            description: description,
            leg_id: this.state.review_leg_id,
            name: this.context.user.first_name + " " + this.context.user.last_name
        })
            .then(response => {
                this.setState({review_leg_id: null, reviewModal: false}, function () {
                    this.loadTrip()
                })
            })
    }

    async loadTrip() {
        const trip_id = this.props.history.location.pathname.split("/")[2]
        await axios.get("/api/v1/get-trip-data-and-legs/"+trip_id)
            .then(response => {
                this.setState({trip: response.data}, function() {
                    console.log("STATE", this.state)
                })
            })
    }

    async handleChange(e, leg_id) {
        e.preventDefault();
        const formData = new FormData();
        if (e.target.files.length) {
            formData.append("image", e.target.files[0]);
            formData.append('leg_id', leg_id)

            await axios.post("/api/v1/add-leg-image",formData);
            return this.loadTrip()
        }
    }


    componentDidMount() {
        this.loadTrip();
    }

    render() {
        console.log("LEGS", this.state.trip.legs)
        return(
            <>
            {this.state.reviewModal &&
                <ReviewModal
                    cancel={() => this.setState({reviewModal: false})}
                    submit={(review, stars) => this.submitReview(review, stars)}
                />
            }

            <PageHeader internal />
            <ContentHeader>
            <BackButtom />
                <h1>{this.state.trip.title}</h1>
                <section>
                    <p>By {this.state.trip.user}</p>
                    <p>•</p>
                    <p>{this.state.trip.startingDate}</p>
                </section>
            </ContentHeader>

            <Content>

                <TripContent>
                    <p>{this.state.trip.description}</p>

                    {this.state.trip.legs ? (
                        <Legs>
                            {this.state.trip.legs.map((leg, index) => (
                                <Leg>
                                    <LegHeader>
                                        <LegInfo>
                                            <h3>Leg {index + 1}</h3>
                                            <div>
                                                <h2>{leg.place}</h2>
                                            </div>

                                            <div>
                                                <section>
                                                    <FaMapMarkerAlt />
                                                    <p>{leg.address}</p>
                                                </section>
                                            </div>
                                        </LegInfo>
                                        <Buttons>
                                            <label htmlFor="upload-button">ADD PHOTOS</label>
                                            <input
                                                type="file"
                                                id="upload-button"
                                                style={{ display: "none" }}
                                                onChange={(e) => this.handleChange(e, leg.id)}
                                            />
                                            {!leg.review &&
                                            <button onClick={() => (this.setState({reviewModal: true, review_leg_id: leg.id}), window.scrollTo(0, 0))}>ADD A REVIEW</button>
                                            }
                                        </Buttons>
                                    </LegHeader>

                                    <LegImages>
                                        {leg.images && leg.images.map(img => (
                                            <img src={img} />
                                        ))}
                                    </LegImages>

                                    <LegSection>
                                        <div>
                                            <h3>Description</h3>
                                        </div>

                                        <p>{leg.description}</p>
                                    </LegSection>

                                    {leg.review &&
                                    <LegSection>
                                        <div>
                                            <h3>Review</h3>
                                            <Stars review={leg.review} />
                                        </div>

                                        <p>{leg.reviewDescription}</p>
                                    </LegSection>
                                    }
                                </Leg>
                            ))}
                        </Legs>
                    ) : ""}
                </TripContent>

                <Sidebar>
                    <Share>
                        <h2>Share this journal</h2>

                        <section>
                            <FaFacebookF />
                            <FaTwitter />
                            <FaCopy />
                        </section>
                    </Share>
                </Sidebar>
            </Content>
            <PageFooter />
            </>
        )
    }
}

export default Trip;
