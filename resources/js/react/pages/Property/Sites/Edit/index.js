import React, {Component} from 'react';
import InputMask from 'react-input-mask';

import {toast} from 'react-toastify';

import {Content, Half, Form, Site, Header, Body, Info, SitesList, SiteItem, HalfInput, Checkbox, Controls, Span} from './styles';

class Edit extends Component {
    constructor() {
        super();

        this.state = {
            title: null,
            price: null,
            pax: null,
            rv: null,
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

        this.props.editSite(this.props.index, data);
    }

    componentDidMount() {
        this.setState({
            title: this.props.site.title,
            price: this.props.site.price,
            pax: this.props.site.pax,
            rv: this.props.site.rv,
            sites: this.props.site.sites
        });
    }

    render() {
        return(
            <Content>
                <Form>
                    <form onSubmit={(e) => this.submit(e)}>
                        <Half>
                            <Site>
                                <Header>
                                    <h2>{this.state.title}</h2>
                                    <p>${this.state.price}</p>
                                </Header>
                                <Body>
                                    <Info>
                                        <p>{this.state.pax} Pax</p>
                                        <p>{this.state.rv} ft Max Length</p>
                                    </Info>
                                </Body>
                                <SitesList>
                                    {this.state.sites.map(site => (
                                        <SiteItem>
                                            <h2>{site.siteName}</h2>
                                        </SiteItem>
                                    ))}
                                </SitesList>
                            </Site>
                        </Half>
                        <Half>
                            <section>
                                <HalfInput>
                                    <p>Title*</p>
                                    <input
                                        value={this.state.title}
                                        onChange={(e) => this.setState({title: e.target.value})}
                                    />
                                </HalfInput>
                                <HalfInput withIcon>
                                    <p>Price*</p>
                                    <InputMask
                                        mask="99.99"
                                        value={this.state.price ? this.state.price : ''}
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
                                        value={this.state.pax ? this.state.pax : ''}
                                        onChange={(e) => this.setState({pax: e.target.value})}
                                    />
                                </HalfInput>
                                <HalfInput withIcon>
                                    <p>RV max length*</p>
                                    <InputMask
                                        mask="99"
                                        value={this.state.rv ? this.state.rv : ''}
                                        onChange={(e) => this.setState({rv: e.target.value})}
                                    />
                                    <h1>Ft</h1>
                                </HalfInput>
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

export default Edit;