import React, {Component} from 'react';
import {Content, Copy, Info, Menu, Logo, Download} from './styles';

import LogoWhite from '../../assets/logoWhite.png';
import Google from '../../assets/google.png';
import Apple from '../../assets/apple.png';

import {FaFacebookF, FaInstagram, FaTwitch, FaTwitter, FaUser} from 'react-icons/fa'

class Footer extends Component {

    render() {
        return(
            <Content>
                <Info>
                    <Logo>
                        <Download>
                            <img src={LogoWhite} />

                            <p>Keep exploring with our apps:</p>

                            <section>
                                <img src={Google} />
                                <img src={Apple} />
                            </section>
                        </Download>
                    </Logo>
                    <Menu>
                        <h2>Quick Links</h2>

                        <section>
                            <p>About us</p>
                        </section>

                        <section>
                            <p>Blog</p>
                        </section>

                        <section>
                            <p>Contact</p>
                        </section>

                        <section>
                            <p>FAQ</p>
                        </section>
                    </Menu>

                    <Menu>
                        <h2>Legal stuff</h2>

                        <section>
                            <p>Disclaimer</p>
                        </section>

                        <section>
                            <p>Financing</p>
                        </section>

                        <section>
                            <p>Privacy Policy</p>
                        </section>

                        <section>
                            <p>Terms of Service</p>
                        </section>
                    </Menu>

                    <Menu>
                        <h2>Social</h2>

                        <section>
                            <FaFacebookF />
                            <p>Facebook</p>
                        </section>

                        <section>
                            <FaTwitter />
                            <p>Twitter</p>
                        </section>

                        <section>
                            <FaInstagram />
                            <p>Instagram</p>
                        </section>
                    </Menu>
                </Info>
                <Copy>
                    <p>DiscoverRoad, LLC 2020</p>
                </Copy>
            </Content>
        )
    }
}

export default Footer;