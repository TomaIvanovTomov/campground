import React, {Component} from 'react';

import {Content} from './styles';

import {toast} from 'react-toastify';

import Steps from './Steps';

import PropertyInformation from './Information';
import Taxes from './Taxes';
import Sites from './Sites';
import Payment from './Payment';

class Property extends Component {
    constructor() {
        super();

        this.state = {
            step: 1,
            completed: []
        };

        this.saveDraft = this.saveDraft.bind(this);
        this.nextStep = this.nextStep.bind(this);
    }

    saveDraft(data) {
        if (this.state.step == 1) {
            const draft = {
                pname: data.pname,
                image: data.image,
                email: data.email,
                website: data.website,
                fax: data.fax,
                phone: data.phone,
                checkin: data.checkin,
                checkout: data.checkout,
                address: data.address,
                country: data.country,
                state: data.state,
                city: data.city,
                latitude: data.latitude,
                longitude: data.longitude
            };
        }

        // call to save draft

        toast.success('Progress saved!')
    }

    nextStep(data) {
        if (this.state.step == 1) {
            const info = {
                pname: data.pname,
                image: data.image,
                email: data.email,
                website: data.website,
                fax: data.fax,
                phone: data.phone,
                checkin: data.checkin,
                checkout: data.checkout,
                address: data.address,
                country: data.country,
                state: data.state,
                city: data.city,
                latitude: data.latitude,
                longitude: data.longitude
            };
        }

        if (this.state.step == 2) {
            const info = {
                sales: data.sales,
                country: data.country,
                state: data.state,
                other: data.other
            };

            /*if (
                !info.sales.percent && !info.sales.fix ||
                !info.country.percent && !info.country.fix ||
                !info.state.percent && !info.state.fix
            ) {
                toast.error('Please fill all the required tax info.');
                return;
            }*/
        }

        if (this.state.step == 4) {
            const info = {
                timeBefore: data.timeBefore,
                timeBeforeType: data.timeBeforeType,
                pets: data.pets,
                currency: data.currency,
                americanExpress: data.americanExpress,
                maestro: data.currency,
                visa: data.visa,
                discover: data.discover,
                euro: data.euro,
                unionPay: data.unionPay,
                diners: data.diners,
                jcb: data.jcb,
                invoiceName: data.invoiceName
            };

            /*if (
                !info.timeBeforeType ||
                !info.currency
            ) {
                toast.error('Please fill all the required tax info.');
                return;
            }*/
        }

        // call to save data

        const completed = this.state.completed;

        completed.push(this.state.step);

        this.setState({
            step: this.state.step + 1,
            completed: completed
        });

        toast.success('Progress saved!')
    }

    render() {
        return(
            <Content>
                <Steps
                    step={this.state.step}
                    completed={this.state.completed}
                />

                {this.state.step == 1 &&
                    <PropertyInformation
                        saveDraft={(data) => this.saveDraft(data)}
                        nextStep={(data) => this.nextStep(data)}
                    />
                }

                {this.state.step == 2 &&
                    <Taxes
                        previous={() => this.setState({step: this.state.step - 1})}
                        saveDraft={(data) => this.saveDraft(data)}
                        nextStep={(data) => this.nextStep(data)}
                    />
                }

                {this.state.step == 3 &&
                    <Sites
                        previous={() => this.setState({step: this.state.step - 1})}
                        nextStep={() => this.setState({step: this.state.step + 1})}
                    />
                }

                {this.state.step == 4 &&
                    <Payment
                        previous={() => this.setState({step: this.state.step - 1})}
                        saveDraft={(data) => this.saveDraft(data)}
                        nextStep={(data) => this.nextStep(data)}
                    />
                }
            </Content>
        )
    }
}

export default Property;
