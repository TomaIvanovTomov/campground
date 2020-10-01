import React, {Component} from 'react';
import {FaPhone, FaEnvelope, FaMapMarkerAlt} from 'react-icons/fa';
import { withRouter } from 'react-router-dom';
import {Content, ContentHeader, Main, MainProperty, MainSidebar, PropertyContent, PropertyHeader, PropertyContact, SidebarHeader} from './styles';
import Policies from './Policies';
import Site from './Site';
import Stars from '../../../components/Stars';
import SiteImg from '../../../assets/site.jpg';
import {SanctumContext} from "react-sanctum";
import {toast} from 'react-toastify';

class Property extends Component {

    static contextType = SanctumContext;

    constructor(props) {
        super(props);

        this.state = {
            property: []
        }

        this.loadProperty = this.loadProperty.bind(this);
    }

    loadProperty() {
        /*axios.get("/api/v1/get-properties/"+this.context.user.id)
            .then((response) => {
                this.setState({property: response.data});
            })
            .catch((err) => {
                toast.message(err)
            })*/
        const data = {
            name: 'GrandStand RV Park',
            address: '3082 Speedway Blvd, Lincoln, AL 35096, United States',
            phone: '+1 205-541-2371',
            email: 'support@grandstandrv.com',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nunc arcu, ultrices a est ac, lacinia suscipit mi. Suspendisse ultrices magna et tellus consequat, tempor viverra felis fringilla. Donec efficitur commodo maximus. Nunc posuere mauris ante, in cursus tellus pretium rutrum. Donec lobortis augue non sem sagittis sagittis at sit amet mi. Cras metus dolor, hendrerit non nunc molestie, laoreet semper justo. Quisque sed ullamcorper magna.',
            policies: [
                {
                  name: 'Cancellation policy',
                  values: [
                    'The guest will be charged the total price if they cancel anytime'
                  ]
                },
                {
                  name: 'Pets',
                  values: [
                    'Pets are allowed at 10 USD per pet'
                  ]
                },
                {
                  name: 'Children and extra beds',
                  values: [
                    'All kids are welcome',
                    'Kids stay free! One child 12 years old or younger stays free when using existing bedding',
                    'Rollaway/extra beds are available for USD 150 per night',
                    'Free cribs (infant beds)'
                  ]
                },
                {
                  name: 'Internet',
                  values: [
                    'Free Wi-Fi in public areas',
                    'Free Wi-Fi in RVs'
                  ]
                }
              ],
            sites: [
              {
                title: 'Deluxe',
                price: '65.00',
                pax: 12,
                rv: 40,
                sites: [
                  {
                    siteName: '22B'
                  }
                ]
              }
            ]
        };

        this.setState({property: data});
    }

    componentWillMount() {
        this.loadProperty();
    }

    render() {
        console.log("HIST", this.props)
        return(
            <Content>
                <ContentHeader>
                    <h1>Property Management</h1>
                    <button onClick={() => {this.props.history.push("/property")}}>Add new property</button>
                </ContentHeader>
                <Main>

                  <MainProperty>
                    <PropertyContent>
                      <PropertyHeader>
                        <section>
                          <h2>{this.state.property.name}</h2>
                          <Stars review={4} />
                        </section>

                        <section>
                          <FaMapMarkerAlt />
                          <p>{this.state.property.address} - View on map</p>
                        </section>
                      </PropertyHeader>

                      <img src={SiteImg} />

                      <PropertyContact>
                        <section>
                          <FaPhone />
                          <p>Phone: {this.state.property.phone}</p>
                        </section>
                        <section>
                          <FaEnvelope />
                          <p>{this.state.property.email}</p>
                        </section>
                      </PropertyContact>

                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nunc arcu, ultrices a est ac, lacinia suscipit mi. Suspendisse ultrices magna et tellus consequat, tempor viverra felis fringilla. Donec efficitur commodo maximus. Nunc posuere mauris ante, in cursus tellus pretium rutrum. Donec lobortis augue non sem sagittis sagittis at sit amet mi. Cras metus dolor, hendrerit non nunc molestie, laoreet semper justo. Quisque sed ullamcorper magna.</p>
                      </PropertyContent>

                      <PropertyContent>
                      <Policies policies={this.state.property.policies} />
                    </PropertyContent>
                  </MainProperty>

                  <MainSidebar>
                    <PropertyContent>
                      <SidebarHeader>
                        <h3>Sites</h3>
                        <button>Add new site</button>
                      </SidebarHeader>

                      {this.state.property.sites.map(site => (
                        <Site site={site} />
                      ))}
                    </PropertyContent>
                  </MainSidebar>

                </Main>
            </Content>
        )
    }
}

export default withRouter(Property);
