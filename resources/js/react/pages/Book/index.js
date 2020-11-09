import React, {Component} from 'react';
import InputMask from 'react-input-mask';

import {Link} from 'react-router-dom';

import {Content, Header, HeaderInfo, LoginSection, Info, PropertyContent, Sidebar, FormSection, FormInputs, GuestSection, Buttons} from './styles';

import BookInfo from './BookInfo';
import Charges from './Charges';
import Map from './Map';

import BackButtom from '../../components/BackButtom';
import PageHeader from '../../components/Header';
import PageFooter from '../../components/Footer';
import FullSearchLocation from '../../components/FullSearchLocation';

import ConfirmBook from '../../modals/ConfirmBook';

import {FaUser} from 'react-icons/fa';
import {SanctumContext} from "react-sanctum";

class Book extends Component {

    static contextType = SanctumContext;

    constructor(props) {
        super(props);

        this.state = {
            confirmBookModal: false,
            property: [],
            title: false,
            first_name: false,
            last_name: false,
            email: false,
            phone: false,
            address1: false,
            address2: false,
            city: false,
            state: false,
            zip: false,
            rv_type: false,
            rv_length: false,
            rv_slides: false,
            guest_first_name: false,
            guest_last_name: false,
            request: false,
            bookInfo: false
        }

        this.loadProperty = this.loadProperty.bind(this);
        this.submit = this.submit.bind(this);
     }

    submit() {
        axios.post("/api/v1/booking", {
            user_id: this.context.user.id,
            data: this.state
        })
    }

    async loadProperty() {
        const id = this.props.match.params.id;
        await axios.get("/api/v1/get-single-booking/"+id)
            .then(res => {
                this.setState({
                    property: res.data.property,
                    bookInfo: res.data.bookInfo
                })
            })
    }

    componentDidMount() {
        this.loadProperty();
    }

    render() {
        return(
            <>
            {this.state.confirmBookModal &&
                <ConfirmBook
                    cancel={() => this.setState({confirmBookModal: false})}
                />
            }

            <PageHeader internal />
            <Content>
                <BackButtom />

                <Header>
                    <HeaderInfo>
                        <p>Enter your details</p>

                        <h2>You're almost there!</h2>

                        <p>Please enter the traveler details and make the payment to complete the booking.</p>
                    </HeaderInfo>

                    {/*<button>Add to Trip/Leg</button>*/}
                </Header>
                <Info>
                    <PropertyContent>
                        <FullSearchLocation slim data={this.state.property} />

                        {/*<LoginSection>
                            <section>
                                <FaUser />

                                <p>Login to book faster or register to manage your booking on the go!</p>
                            </section>

                            <Link to="/login"><p>Login | Register</p></Link>
                        </LoginSection>*/}

                        <FormSection>
                            <h2>Personal details</h2>
                            <p>Almost done! Just fill in the <span>*</span> required fields.</p>

                            <FormInputs>
                                <section>
                                    <h3>Title <span>*</span></h3>
                                    <input type="text" onChange={e => this.setState({title: e.target.value})}/>
                                </section>

                                <section>
                                    <h3>First Name <span>*</span></h3>
                                    <input type="text" onChange={e => this.setState({first_name: e.target.value})}/>
                                </section>

                                <section>
                                    <h3>Last Name <span>*</span></h3>
                                    <input type="text" onChange={e => this.setState({last_name: e.target.value})}/>
                                </section>
                            </FormInputs>

                            <FormInputs half>
                                <section>
                                    <h3>E-mail address <span>*</span></h3>
                                    <input type="text" onChange={e => this.setState({email: e.target.value})}/>
                                </section>

                                <section>
                                    <h3>Mobile Number <span>*</span></h3>
                                    <InputMask
                                        required mask="+999 99 999 99"
                                        alwaysShowMask
                                        maskChar="_"
                                        onChange={e => this.setState({phone: e.target.value})}
                                    />
                                </section>
                            </FormInputs>
                        </FormSection>

                        <FormSection>
                            <h2>Address details</h2>

                            <FormInputs half>
                                <section>
                                    <h3>Address Line 1 <span>*</span></h3>
                                    <input type="text" onChange={e => this.setState({address1: e.target.value})}/>
                                </section>

                                <section>
                                    <h3>Address Line 2 <span>*</span></h3>
                                    <input type="text" onChange={e => this.setState({address2: e.target.value})}/>
                                </section>
                            </FormInputs>

                            <FormInputs>
                                <section>
                                    <h3>City <span>*</span></h3>
                                    <input type="text" onChange={e => this.setState({city: e.target.value})}/>
                                </section>

                                <section>
                                    <h3>State <span>*</span></h3>
                                    <input type="text" onChange={e => this.setState({state: e.target.value})}/>
                                </section>

                                <section>
                                    <h3>Zip-code <span>*</span></h3>
                                    <input type="text" onChange={e => this.setState({zip: e.target.value})}/>
                                </section>
                            </FormInputs>
                        </FormSection>

                        <FormSection>
                            <h2>Vehicle details</h2>

                            <FormInputs half>
                                <section>
                                    <h3>RV Type<span>*</span></h3>
                                    <input type="text" onChange={e => this.setState({rv_type: e.target.value})}/>
                                </section>

                                <section>
                                    <h3>RV Length<span>*</span></h3>
                                    <input type="text" onChange={e => this.setState({rv_length: e.target.value})}/>
                                </section>
                            </FormInputs>

                            <FormInputs half>
                                <section>
                                    <h3>RV Slides <span>*</span></h3>
                                    <input type="text" onChange={e => this.setState({rv_slides: e.target.value})}/>
                                </section>
                            </FormInputs>
                        </FormSection>

                        <FormSection>
                            <h2>Deluxe (Non-refundable)</h2>
                            <GuestSection>
                                <p>Non-refundable</p>
                                <h3>Guest No 1</h3>
                            </GuestSection>

                            <FormInputs half>
                                <section>
                                    <h3>First Name <span>*</span></h3>
                                    <input type="text" onChange={e => this.setState({guest_first_name: e.target.value})}/>
                                </section>

                                <section>
                                    <h3>Last Name <span>*</span></h3>
                                    <input type="text" onChange={e => this.setState({guest_last_name: e.target.value})}/>
                                </section>
                            </FormInputs>
                        </FormSection>

                        <FormSection>
                            <h2>Special requests</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu volutpat velit. Nunc molestie risus id malesuada accumsan. Phasellus justo dui, bibendum sed dapibus rutrum, vulputate eget dolor. Vestibulum nec mauris ac nisi fermentum pulvinar. Quisque tristique mollis mi, ac sollicitudin arcu vehicula at. </p>

                            <FormInputs full>
                                <section>
                                    <textarea
                                        onChange={e => this.setState({request: e.target.value})}
                                    ></textarea>
                                </section>
                            </FormInputs>
                        </FormSection>

                        <FormSection>
                            <h2>Payment Details</h2>

                            <FormInputs>
                                <section>
                                    <h3>Card Number <span>*</span></h3>
                                    <InputMask
                                        required mask="9999 9999 9999 9999"
                                        alwaysShowMask
                                        maskChar="*"
                                    />
                                </section>

                                <section>
                                    <h3>Expiration <span>*</span></h3>
                                    <input type="text" placeholder="month" />
                                </section>

                                <section>
                                    <input type="text" placeholder="year" />
                                </section>
                            </FormInputs>

                            <FormInputs full>
                                <section>
                                    <h3>Name on card <span>*</span></h3>
                                    <input type="text" placeholder="E.g. John Lackey" />
                                </section>
                            </FormInputs>

                            <Buttons>
                                <button>Cancel</button>
                                <button onClick={() => (this.setState({confirmBookModal: true}), window.scrollTo(0, 0), this.submit())}>Confirm booking</button>
                            </Buttons>
                        </FormSection>
                    </PropertyContent>

                    <Sidebar>
                        <BookInfo
                            data={this.state.bookInfo}
                        />
                        <Map />
                        <Charges />
                    </Sidebar>
                </Info>
            </Content>
            <PageFooter />
            </>
        )
    }
}

export default Book;
