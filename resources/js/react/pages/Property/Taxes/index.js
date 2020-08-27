import React, {Component} from 'react';
import InputMask from 'react-input-mask';

import {Content, Half, Form, HalfInput, Controls, Span} from './styles';
import {SanctumContext} from "react-sanctum";

class Taxes extends Component {

    static contextType = SanctumContext;

    constructor(props) {
        super(props);

        this.state = {
            sales: {
                percent: null,
                fix: null
            },
            country: {
                percent: null,
                fix: null
            },
            state: {
                percent: null,
                fix: null
            },
            other: {
                percent: null,
                fix: null
            }
        }

        this.submit = this.submit.bind(this);
        this.setTaxes = this.setTaxes.bind(this);
    }

    setTaxes(category, type, value) {
        if (category == 'sales') {
            const sales = this.state.sales;

            if (type == 'percent') {
                sales.percent = value;
                sales.fix = null;
            }

            if (type == 'fix') {
                sales.percent = null;
                sales.fix = value;
            }

            console.log(sales);

            this.setState({sales: sales});
        }

        if (category == 'country') {
            const country = this.state.country;

            if (type == 'percent') {
                country.percent = value;
                country.fix = null;
            }

            if (type == 'fix') {
                country.percent = null;
                country.fix = value;
            }

            this.setState({country: country});
        }

        if (category == 'state') {
            const state = this.state.state;

            if (type == 'percent') {
                state.percent = value;
                state.fix = null;
            }

            if (type == 'fix') {
                state.percent = null;
                state.fix = value;
            }

            this.setState({state: state});
        }

        if (category == 'other') {
            const other = this.state.other;

            if (type == 'percent') {
                other.percent = value;
                other.fix = null;
            }

            if (type == 'fix') {
                other.percent = null;
                other.fix = value;
            }

            this.setState({other: other});
        }
    }

    submit(e) {
        e.preventDefault();
        axios.post("/api/v1/set-taxes", {
            property_id: this.context.property,
            sales_tax_percentage: this.state.sales.percent,
            sales_tax: this.state.sales.fix,
            country_tax_percentage: this.state.country.percent,
            country_tax: this.state.country.fix,
            state_tax_percentage: this.state.state.percent,
            state_tax: this.state.state.fix,
            other_tax_percentage: this.state.other.percent,
            other_tax: this.state.other.fix,
        })
        .then(response => {
            if (response.status === 200) {
                console.log("context tax", this.context)
                this.props.nextStep(this.state);
            }
        })
        .catch(err => {
            if (err.response.status === 422) {
                message("error", err.response.message)
            }
        })
    }

    render() {
        return(
            <Content>
                <Form>
                    <form onSubmit={(e) => this.submit(e)}>
                        <Half>
                            <section>
                                <HalfInput>
                                    <p>Sales tax*</p>
                                    <InputMask
                                        onChange={(e) => this.setTaxes('sales', 'percent', e.target.value)}
                                        value={this.state.sales.percent ? this.state.sales.percent : ''}
                                        mask="99"
                                    />
                                    <h1>%</h1>
                                </HalfInput>
                                <HalfInput noTitle>
                                    <InputMask
                                        onChange={(e) => this.setTaxes('sales', 'fix', e.target.value)}
                                        value={this.state.sales.fix ? this.state.sales.fix : ''}
                                        mask="99.99"
                                    />
                                    <h1>$</h1>
                                </HalfInput>
                            </section>
                            <section>
                                <HalfInput>
                                    <p>Country tax*</p>
                                    <InputMask
                                        onChange={(e) => this.setTaxes('country', 'percent', e.target.value)}
                                        value={this.state.country.percent ? this.state.country.percent : ''}
                                        mask="99"
                                    />
                                    <h1>%</h1>
                                </HalfInput>
                                <HalfInput noTitle>
                                    <InputMask
                                        onChange={(e) => this.setTaxes('country', 'fix', e.target.value)}
                                        value={this.state.country.fix ? this.state.country.fix : ''}
                                        mask="99.99"
                                    />
                                    <h1>$</h1>
                                </HalfInput>
                            </section>
                        </Half>
                        <Half>
                            <section>
                                <HalfInput>
                                    <p>state tax*</p>
                                    <InputMask
                                        onChange={(e) => this.setTaxes('state', 'percent', e.target.value)}
                                        value={this.state.state.percent ? this.state.state.percent : ''}
                                        mask="99"
                                    />
                                    <h1>%</h1>
                                </HalfInput>
                                <HalfInput noTitle>
                                    <InputMask
                                        onChange={(e) => this.setTaxes('state', 'fix', e.target.value)}
                                        value={this.state.state.fix ? this.state.state.fix : ''}
                                        mask="99.99"
                                    />
                                    <h1>$</h1>
                                </HalfInput>
                            </section>
                            <section>
                                <HalfInput>
                                    <p>other tax</p>
                                    <InputMask
                                        onChange={(e) => this.setTaxes('other', 'percent', e.target.value)}
                                        value={this.state.other.percent ? this.state.other.percent : ''}
                                        mask="99"
                                    />
                                    <h1>%</h1>
                                </HalfInput>
                                <HalfInput noTitle>
                                    <InputMask
                                        onChange={(e) => this.setTaxes('other', 'fix', e.target.value)}
                                        value={this.state.other.fix ? this.state.other.fix : ''}
                                        mask="99.99"
                                    />
                                    <h1>$</h1>
                                </HalfInput>
                            </section>

                            <Controls>
                                <Span onClick={() => this.props.previous()}>Previous</Span>
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

export default Taxes;
