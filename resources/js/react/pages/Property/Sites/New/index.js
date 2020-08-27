import React, {Component} from 'react';
import InputMask from 'react-input-mask';

import {toast} from 'react-toastify';

import {Content, Half, Form, HalfInput, Checkbox, Controls, Span} from './styles';

class New extends Component {
    constructor() {
        super();

        this.state = {
            title: null,
            price: null,
            pax: null,
            rv: null,
            weekDiscount: null,
            monthDiscount: null,
            wheel: false,
            classA: false,
            classB: false,
            classC: false,
            popup: false,
            tent: false,
            toy: false,
            travelTrailer: false,
            salesTax: false,
            stateTax: false,
            countryTax: false,
            otherTax: false
        }

        this.submit = this.submit.bind(this);
    }

    submit(e) {
        e.preventDefault();
        const data = this.state;

        if (
            !data.title ||
            !data.price ||
            !data.pax ||
            !data.rv
        ) {
            toast.error('Please fill all required fields.');
            return;
        }

        this.props.addSite(data);
    }

    render() {
        return(
            <Content>
                <Form>
                    <form onSubmit={(e) => this.submit(e)}>
                        <Half>
                        <section>
                                <HalfInput>
                                    <p>Site name*</p>
                                    <input onChange={(e) => this.setState({siteName: e.target.value})}></input>
                                </HalfInput>
                                <HalfInput withIcon>
                                    <p>Rate per night*</p>
                                    <InputMask
                                        mask="99.99"
                                        onChange={(e) => this.setState({rate: e.target.value})}
                                    />
                                    <h1>$</h1>
                                </HalfInput>
                            </section>
                            <section>
                                <HalfInput>
                                    <p>Max occupancy*</p>
                                    <InputMask
                                        mask="99"
                                        onChange={(e) => this.setState({pax: e.target.value})}
                                    />
                                </HalfInput>
                                <HalfInput withIcon>
                                    <p>RV max length*</p>
                                    <InputMask
                                        mask="99"
                                        onChange={(e) => this.setState({rv: e.target.value})}
                                    />
                                    <h1>Ft</h1>
                                </HalfInput>
                            </section>
                            <section>
                                <HalfInput withIcon>
                                    <p>7 nights discount</p>
                                    <InputMask
                                        mask="99"
                                        onChange={(e) => this.setState({weekDiscount: e.target.value})}
                                    />
                                    <h1>%</h1>
                                </HalfInput>
                                <HalfInput withIcon>
                                    <p>30 nights discount</p>
                                    <InputMask
                                        mask="99"
                                        onChange={(e) => this.setState({monthDiscount: e.target.value})}
                                    />
                                    <h1>%</h1>
                                </HalfInput>
                            </section>
                        </Half>
                        <Half>
                            <section>
                                <Checkbox>
                                    <input
                                        onChange={() => this.setState({wheel: !this.state.wheel})}
                                        onChange={() => this.setState({wheel: !this.state.wheel})}
                                        type="checkbox"
                                        name="wheel"
                                    />
                                    <p>5th wheel</p>
                                </Checkbox>
                                <Checkbox>
                                    <input
                                        onChange={() => this.setState({classA: !this.state.classA})}
                                        type="checkbox"
                                        name="classA"
                                    />
                                    <p>Class A motorhome</p>
                                </Checkbox>
                            </section>

                            <section>
                                <Checkbox>
                                    <input
                                        onChange={() => this.setState({classB: !this.state.classB})}
                                        type="checkbox"
                                        name="classB"
                                    />
                                    <p>Class B motorhome</p>
                                </Checkbox>
                                <Checkbox>
                                    <input
                                        onChange={() => this.setState({classC: !this.state.classC})}
                                        type="checkbox"
                                        name="classC"
                                    />
                                    <p>Class C motorhome</p>
                                </Checkbox>
                            </section>

                            <section>
                                <Checkbox>
                                    <input
                                        onChange={() => this.setState({popup: !this.state.popup})}
                                        type="checkbox"
                                        name="popup"
                                    />
                                    <p>Popup</p>
                                </Checkbox>
                                <Checkbox>
                                    <input
                                        onChange={() => this.setState({tent: !this.state.tent})}
                                        type="checkbox"
                                        name="tent"
                                    />
                                    <p>Tent</p>
                                </Checkbox>
                            </section>

                            <section>
                                <Checkbox>
                                    <input
                                        onChange={() => this.setState({toy: !this.state.toy})}
                                        type="checkbox"
                                        name="toy"
                                    />
                                    <p>Toy hauler</p>
                                </Checkbox>
                                <Checkbox>
                                    <input
                                        onChange={() => this.setState({travelTrailer: !this.state.travelTrailer})}
                                        type="checkbox"
                                        name="travelTrailer"
                                    />
                                    <p>Travel trailer</p>
                                </Checkbox>
                            </section>

                            <section>
                                <Checkbox>
                                    <input
                                        onChange={() => this.setState({salesTax: !this.state.salesTax})}
                                        type="checkbox"
                                        name="salesTax"
                                    />
                                    <p>Sales tax</p>
                                </Checkbox>
                                <Checkbox>
                                    <input
                                        onChange={() => this.setState({stateTax: !this.state.stateTax})}
                                        type="checkbox"
                                        name="stateTax"
                                    />
                                    <p>State tax</p>
                                </Checkbox>
                            </section>

                            <section>
                                <Checkbox>
                                    <input
                                        onChange={() => this.setState({countryTax: !this.state.countryTax})}
                                        type="checkbox"
                                        name="countryTax"
                                    />
                                    <p>Country tax</p>
                                </Checkbox>
                                <Checkbox>
                                    <input
                                        onChange={() => this.setState({otherTax: !this.state.otherTax})}
                                        type="checkbox"
                                        name="otherTax"
                                    />
                                    <p>Other tax</p>
                                </Checkbox>
                            </section>

                            <Controls>
                                <Span onClick={() => this.props.goBack()}>Go back</Span>

                                <button onClick={(e) => this.submit(e)}>Save</button>
                            </Controls>
                        </Half>
                    </form>
                </Form>
            </Content>
        )
    }
}

export default New;