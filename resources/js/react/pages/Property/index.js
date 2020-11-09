import React, {Component} from 'react';

import {Content, Header, HeaderInfo, HeaderDistance, Info, PropertyContent, Sidebar, PropertyInfoHeader, PropertyInfoHeaderTitle} from './styles';

import Pictures from './Pictures';
import Description from './Description';
import SiteType from './SiteType';
import Policies from './Policies';
import BookInfo from './BookInfo';
import Map from './Map';

import BackButtom from '../../components/BackButtom';
import Stars from '../../components/Stars';
import PageHeader from '../../components/Header';
import PageFooter from '../../components/Footer';

import BookModal from '../../modals/Book';

import { FaMapMarkerAlt, FaCompass } from 'react-icons/fa';

class Property extends Component {
    constructor() {
        super();

        this.state = {
            bookModal: false,
            modeSelection: 'sites',
            property: [],
            bookInfo: [],
            images: []
        }

        this.loadProperty = this.loadProperty.bind(this);
    }

    async loadProperty() {
        const id = this.props.match.params.id;
        await axios.get("/api/v1/get-single/"+id)
            .then(res => {
                this.setState({
                    property: res.data.property,
                    bookInfo: res.data.bookInfo,
                    images: res.data.images
                }, function () {
                    console.log("STATETAEET", this.state)
                });
            })
    }

    componentDidMount() {
        this.loadProperty();
    }

    render() {
        return(
            <>
            {this.state.bookModal &&
                <BookModal
                    cancel={() => this.setState({bookModal: false})}
                    propertyID={this.state.property.id}
                />
            }

            <PageHeader internal />
            <Content>
                <BackButtom />

                <Header>
                    <HeaderInfo>
                        <div>
                            <h2>{this.state.property.title}</h2>

                            <section>
                                <Stars review={this.state.property.review} />
                            </section>
                        </div>

                        <div>
                            <section>
                                <FaMapMarkerAlt />
                                <p>{this.state.property.address}</p>
                            </section>

                            <HeaderDistance>
                                <FaCompass />
                                <p>2.1 miles from city</p>
                            </HeaderDistance>
                        </div>
                    </HeaderInfo>

                    {/*<button>Add to Trip/Leg</button>*/}
                </Header>
                <Info>
                    <PropertyContent>
                        <Pictures
                        images={this.state.images}/>
                        <Description
                            description={this.state.property.description}
                            checkIn={this.state.property.checkIn}
                            checkOut={this.state.property.checkOut}
                        />

                        <PropertyInfoHeader>
                            <PropertyInfoHeaderTitle onClick={() => this.setState({modeSelection: 'sites'})} selected={this.state.modeSelection == 'sites' ? true: false}>Site type</PropertyInfoHeaderTitle>
                            <PropertyInfoHeaderTitle onClick={() => this.setState({modeSelection: 'policies'})} selected={this.state.modeSelection == 'policies' ? true: false}>Campground policies</PropertyInfoHeaderTitle>
                        </PropertyInfoHeader>

                        {this.state.modeSelection == 'sites' &&
                            <>
                                {this.state.property.siteTypes && this.state.property.siteTypes.map((site, index) => (
                                    <SiteType key={index} image={this.state.images[0]} data={site} />
                                ))}
                            </>
                        }

                        {this.state.modeSelection == 'policies' &&
                            <Policies data={this.state.property.policies} />
                        }
                    </PropertyContent>

                    <Sidebar>
                        <BookInfo
                            book={() => this.setState({bookModal: true})}
                            data={this.state.bookInfo}
                        />
                        <Map />
                    </Sidebar>
                </Info>
            </Content>
            <PageFooter />
            </>
        )
    }
}

export default Property;
