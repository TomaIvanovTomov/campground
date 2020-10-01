import React, {Component} from 'react';
import InputMask from 'react-input-mask';
import {FaPlusCircle} from 'react-icons/fa';

import {Content, Half, Form, HalfInput, Controls, Span} from './styles';
import {SanctumContext} from "react-sanctum";

class Taxes extends Component {

    static contextType = SanctumContext;

    constructor(props) {
        super(props);

        this.state = {
            taxes: [
                {
                    name: null,
                    value: null
                }
            ]
        }

        this.submit = this.submit.bind(this);
        this.setTaxes = this.setTaxes.bind(this);
    }

    setTaxes(type, index, value) {
        const taxes = this.state.taxes;

        if (type == 'name') {
            taxes[index].name = value;
        } else if (type == 'value') {
            taxes[index].value = value;
        }

        this.setState({taxes: taxes});
    }

    addTaxes() {
        const taxes = this.state.taxes;

        taxes.push({
            name: null,
            value: null
        });

        this.setState({taxes: taxes});
    }

    submit(e) {
        e.preventDefault();
        axios.post("/api/v1/set-taxes", {
            taxes: this.state.taxes,
            property: this.context.property
        })
        .then(response => {
            if (response.status === 200) {
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
                            {this.state.taxes.map((tax, index) => (
                                <>
                                    {index < 2 &&
                                    <section>
                                        <HalfInput>
                                            <p>Tax name</p>
                                            <input
                                                onChange={(e) => this.setTaxes('name', index, e.target.value)}
                                                value={this.state.taxes[index].name}
                                            />
                                        </HalfInput>
                                        <HalfInput withIcon>
                                            <p>Value</p>
                                            <InputMask
                                                onChange={(e) => this.setTaxes('value', index, e.target.value)}
                                                mask="99.99"
                                                placeholder="Enter value"
                                            />
                                            <h1>$</h1>
                                        </HalfInput>

                                        {index == this.state.taxes.length - 1 &&
                                        <FaPlusCircle onClick={() => this.addTaxes()} />
                                        }
                                    </section>
                                    }
                                </>
                            ))}
                        </Half>

                        <Half>
                            {this.state.taxes.map((tax, index) => (
                                <>
                                    {index >= 2 &&
                                    <section>
                                        <HalfInput>
                                            <p>Tax name</p>
                                            <input
                                                onChange={(e) => this.setTaxes('name', index, e.target.value)}
                                                value={this.state.taxes[index].name}
                                            />
                                        </HalfInput>
                                        <HalfInput withIcon>
                                            <p>Value</p>
                                            <InputMask
                                                onChange={(e) => this.setTaxes('value', index, e.target.value)}
                                                mask="99.99"
                                                placeholder="Enter value"
                                            />
                                            <h1>$</h1>
                                        </HalfInput>

                                        {index == this.state.taxes.length - 1 &&
                                        <FaPlusCircle onClick={() => this.addTaxes()} />
                                        }
                                    </section>
                                    }
                                </>
                            ))}

                            <Controls>
                                <Span onClick={() => this.props.previous()}>Previous</Span>
                                <Span onClick={() => this.props.saveDraft(this.state)}>Save as draft</Span>
                                <button onClick={(e) => this.submit(e)}>Proceed</button>
                            </Controls>
                        </Half>
                    </form>
                </Form>
            </Content>
        )
    }
}

export default Taxes;
