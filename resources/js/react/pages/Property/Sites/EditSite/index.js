import React, {Component} from 'react';
import InputMask from 'react-input-mask';

import {toast} from 'react-toastify';

import {Content, Half, Form, Site, Header, Body, Info, SitesList, SiteItem, HalfInput, Checkbox, Controls, Span} from './styles';
import {SanctumContext} from "react-sanctum";

class Edit extends Component {

    static contextType = SanctumContext;

    constructor(props) {
        super(props);

        this.state = {
            id: null,
            title: null,
            price: null,
            pax: null,
            rv: null,
            name: null,
            siteRV: null,
            sitePax: null,
            priceNight: null,
            weekDiscount: null,
            monthDiscount: null,
            wheel: null,
            classA: null,
            classB: null,
            classC: null,
            popup: null,
            tent: null,
            toy: null,
            travelTrailer: null,
            salesTax: null,
            stateTax: null,
            countryTax: null,
            otherTax: null
        }
    }

    submit(e) {
        e.preventDefault();
        const data = this.state;

        if (
            !data.name ||
            !data.siteRV ||
            !data.sitePax ||
            !data.priceNight
            ) {
            toast.error('Please fill all required fields.');
            return;
        }
        axios.post("/api/v1/edit-site", {
            data: data,
            id: this.props.site.sites[this.props.siteIndex].id
        })
        .then(response => {
            if (response.data.type === "success") {
                toast.success(response.data.message)
                delete data.title;
                delete data.price;
                delete data.pax;
                delete data.rv;
                console.log("ksksk", data)
                this.props.editSite(this.props.index, this.props.siteIndex, data);
            } else {
                toast.error(response.data.message)
            }
        })
        .catch(response => {
            toast.error(response.message)
        })
    }

    componentDidMount() {
        console.log("AAAA", this.props.site.sites[this.props.siteIndex])
        this.setState({
            title: this.props.site.title,
            price: this.props.site.price,
            pax: this.props.site.pax,
            rv: this.props.site.rv,
            name: this.props.site.sites[this.props.siteIndex].name,

            id: this.props.site.sites[this.props.siteIndex].id ? this.props.site.sites[this.props.siteIndex].id : null,
            siteRV: this.props.site.sites[this.props.siteIndex].siteRV ? this.props.site.sites[this.props.siteIndex].siteRV : null,
            priceNight: this.props.site.sites[this.props.siteIndex].priceNight ? this.props.site.sites[this.props.siteIndex].priceNight : null,
            sitePax: this.props.site.sites[this.props.siteIndex].sitePax ? this.props.site.sites[this.props.siteIndex].sitePax : null,
            weekDiscount: this.props.site.sites[this.props.siteIndex].weekDiscount ? this.props.site.sites[this.props.siteIndex].weekDiscount : null,
            monthDiscount: this.props.site.sites[this.props.siteIndex].monthDiscount ? this.props.site.sites[this.props.siteIndex].monthDiscount : null,
            wheel: this.props.site.sites[this.props.siteIndex].wheel ? this.props.site.sites[this.props.siteIndex].wheel : null,
            classA: this.props.site.sites[this.props.siteIndex].classA ? this.props.site.sites[this.props.siteIndex].classA : null,
            classB: this.props.site.sites[this.props.siteIndex].classB ? this.props.site.sites[this.props.siteIndex].classB : null,
            classC: this.props.site.sites[this.props.siteIndex].classC ? this.props.site.sites[this.props.siteIndex].classC : null,
            popup: this.props.site.sites[this.props.siteIndex].popup ? this.props.site.sites[this.props.siteIndex].popup : null,
            tent: this.props.site.sites[this.props.siteIndex].tent ? this.props.site.sites[this.props.siteIndex].tent : null,
            toy: this.props.site.sites[this.props.siteIndex].toy ? this.props.site.sites[this.props.siteIndex].toy : null,
            travelTrailer: this.props.site.sites[this.props.siteIndex].travelTrailer ? this.props.site.sites[this.props.siteIndex].travelTrailer : null,
            salesTax: this.props.site.sites[this.props.siteIndex].salesTax ? this.props.site.sites[this.props.siteIndex].salesTax : null,
            stateTax: this.props.site.sites[this.props.siteIndex].stateTax ? this.props.site.sites[this.props.siteIndex].stateTax : null,
            countryTax: this.props.site.sites[this.props.siteIndex].countryTax ? this.props.site.sites[this.props.siteIndex].countryTax : null,
            otherTax: this.props.site.sites[this.props.siteIndex].otherTax ? this.props.site.sites[this.props.siteIndex].otherTax : null
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
                                    <SiteItem>
                                        <h2>{this.state.name}</h2>
                                    </SiteItem>
                                </SitesList>
                            </Site>
                        </Half>
                        <Half>
                            <section>
                                <HalfInput>
                                    <p>Site name*</p>
                                    <input
                                        value={this.state.name}
                                        onChange={(e) => this.setState({name: e.target.value})}
                                    />
                                </HalfInput>
                                <HalfInput withIcon>
                                    <p>Price per night*</p>
                                    <InputMask
                                        mask="99.99"
                                        value={this.state.priceNight ? this.state.priceNight : ''}
                                        onChange={(e) => this.setState({priceNight: e.target.value})}
                                    />
                                    <h1>$</h1>
                                </HalfInput>
                            </section>
                            <section>
                                <HalfInput>
                                    <p>Max occupancy*</p>
                                    <InputMask
                                        mask="99"
                                        value={this.state.sitePax ? this.state.sitePax : ''}
                                        onChange={(e) => this.setState({sitePax: e.target.value})}
                                    />
                                </HalfInput>
                                <HalfInput withIcon>
                                    <p>RV max length*</p>
                                    <InputMask
                                        mask="99"
                                        value={this.state.siteRV ? this.state.siteRV : ''}
                                        onChange={(e) => this.setState({siteRV: e.target.value})}
                                    />
                                    <h1>Ft</h1>
                                </HalfInput>
                            </section>
                            <section>
                                <HalfInput withIcon>
                                    <p>7 nights discount</p>
                                    <InputMask
                                        mask="99"
                                        value={this.state.weekDiscount ? this.state.weekDiscount : ''}
                                        onChange={(e) => this.setState({weekDiscount: e.target.value})}
                                    />
                                    <h1>%</h1>
                                </HalfInput>
                                <HalfInput withIcon>
                                    <p>30 nights discount</p>
                                    <InputMask
                                        mask="99"
                                        value={this.state.monthDiscount ? this.state.monthDiscount : ''}
                                        onChange={(e) => this.setState({monthDiscount: e.target.value})}
                                    />
                                    <h1>%</h1>
                                </HalfInput>
                            </section>

                            <section>
                                <Checkbox>
                                    <input
                                        checked={this.state.wheel}
                                        onChange={() => this.setState({wheel: !this.state.wheel})}
                                        type="checkbox"
                                        name="wheel"
                                    />
                                    <p>5th wheel</p>
                                </Checkbox>
                                <Checkbox>
                                    <input
                                        checked={this.state.classA}
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
                                        checked={this.state.classB}
                                        onChange={() => this.setState({classB: !this.state.classB})}
                                        type="checkbox"
                                        name="classB"
                                    />
                                    <p>Class B motorhome</p>
                                </Checkbox>
                                <Checkbox>
                                    <input
                                        checked={this.state.classC}
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
                                        checked={this.state.popup}
                                        onChange={() => this.setState({popup: !this.state.popup})}
                                        type="checkbox"
                                        name="popup"
                                    />
                                    <p>Popup</p>
                                </Checkbox>
                                <Checkbox>
                                    <input
                                        checked={this.state.tent}
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
                                        checked={this.state.toy}
                                        onChange={() => this.setState({toy: !this.state.toy})}
                                        type="checkbox"
                                        name="toy"
                                    />
                                    <p>Toy hauler</p>
                                </Checkbox>
                                <Checkbox>
                                    <input
                                        checked={this.state.travelTrailer}
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
                                        checked={this.state.salesTax}
                                        onChange={() => this.setState({salesTax: !this.state.salesTax})}
                                        type="checkbox"
                                        name="salesTax"
                                    />
                                    <p>Sales tax</p>
                                </Checkbox>
                                <Checkbox>
                                    <input
                                        checked={this.state.stateTax}
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
                                        checked={this.state.countryTax}
                                        onChange={() => this.setState({countryTax: !this.state.countryTax})}
                                        type="checkbox"
                                        name="countryTax"
                                    />
                                    <p>Country tax</p>
                                </Checkbox>
                                <Checkbox>
                                    <input
                                        checked={this.state.otherTax}
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

export default Edit;
