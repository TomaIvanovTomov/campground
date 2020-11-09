import React, {Component} from 'react';

import {Content, SectionTitle, SectionTitleSquares, AppSection, SubscribeSection, GuestsSection} from './styles';

import Phone from '../../assets/phone.png';
import Google from '../../assets/google.png';
import Apple from '../../assets/apple.png';

import Header from './Header';
import Places from './Places';
import Steps from './Steps';
import Activities from './Activities';
import Guests from './Guests';

import PageFooter from '../../components/Footer';
import {SanctumContext} from "react-sanctum";

class Home extends Component {

    static contextType = SanctumContext;

    render() {
        let internal = this.context.user ? 1 : ""
        console.log("INTERNAL", internal)
        console.log(this.context.user)
        return(
            <>
                <Header internal={internal} />
                <Content>
                    <SectionTitle>
                        <h2>Check the top destinations</h2>

                        <SectionTitleSquares />
                        <SectionTitleSquares second />
                    </SectionTitle>

                    <Places />

                    <SectionTitle>
                        <h2>How does it works?</h2>

                        <SectionTitleSquares />
                        <SectionTitleSquares second />
                    </SectionTitle>

                    <Steps />

                    <SectionTitle>
                        <h2>Best places to stay</h2>

                        <SectionTitleSquares />
                        <SectionTitleSquares second />
                    </SectionTitle>

                    <Places />

                    <SectionTitle>
                        <h2>Activities for you</h2>

                        <SectionTitleSquares />
                        <SectionTitleSquares second />
                    </SectionTitle>

                    <Activities />

                    <GuestsSection>
                        <SectionTitle>
                            <h2>What our guests are saying</h2>

                            <SectionTitleSquares />
                            <SectionTitleSquares second />
                        </SectionTitle>

                        <Guests />

                    </GuestsSection>

                    <AppSection>
                        <img src={Phone} />

                        <div>
                            <SectionTitle>
                                <h2>On the go? Get the app.</h2>

                                <SectionTitleSquares />
                                <SectionTitleSquares second />
                            </SectionTitle>

                            <p>Sync your trip to your phone, and then let DiscoverRoad lead the way with turn-by-turn navigation.</p>

                            <section>
                                <img src={Google} />
                                <img src={Apple} />
                            </section>
                        </div>
                    </AppSection>

                    <SubscribeSection>
                        <h2>Subscribe now and get updates directly to your inbox.</h2>

                        <p>Give us your email to receive awesome stories from the road right in your inbox.</p>

                        <section>
                            <input type="email" />

                            <button>Subscribe</button>
                        </section>
                    </SubscribeSection>
                </Content>

                <PageFooter />
            </>
        )
    }
}

export default Home;
