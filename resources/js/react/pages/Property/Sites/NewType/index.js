import React, {Component} from 'react';
import InputMask from 'react-input-mask';

import {toast} from 'react-toastify';

import {Content, Half, Form, HalfInput, Checkbox, Controls, Span} from './styles';
import {SanctumContext} from "react-sanctum";

class NewType extends Component {

    static contextType = SanctumContext;

    constructor(props) {
        super(props);

        this.state = {
            title: null,
            price: null,
            pax: null,
            rv: null,
            id: null,
            sites: []
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

        axios.post("/api/v1/set-site-type", {
            property_id: 12,
            title: this.state.title,
            price: this.state.price,
            pax: this.state.pax,
            rv: this.state.rv
        })
        .then(response => {
            if (response.status === 200) {
                toast.success(response.data.message)
                data.id = response.data.id
                this.setState({id: data.id})
                this.props.addSiteType(data);
            }
        })
        .catch(response => {
            toast.error(response.data.message)
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
                                    <p>Title*</p>
                                    <input onChange={(e) => this.setState({title: e.target.value})}></input>
                                </HalfInput>
                                <HalfInput withIcon>
                                    <p>Price*</p>
                                    <InputMask
                                        mask="99.99"
                                        onChange={(e) => this.setState({price: e.target.value})}
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
                        </Half>
                        <Half>
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

export default NewType;
