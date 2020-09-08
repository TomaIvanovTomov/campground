import React, {Component} from 'react';

import {SiteInfo, Header, Body, Info, Buttons, SitesList, SiteItem} from './styles';

class Site extends Component {
    constructor() {
        super();

        this.state = {
        }
    }

    render() {
        return(
            <SiteInfo>
                <Header>
                    <h2>{this.props.site.title}</h2>
                    <p>${this.props.site.price}</p>
                </Header>
                <Body>
                    <Info>
                        <p>{this.props.site.pax} Pax</p>
                        <p>{this.props.site.rv} ft Max Length</p>
                    </Info>
                    <Buttons>
                        <p>Edit</p>
                        <p>Delete</p>
                    </Buttons>
                </Body>
                <SitesList>
                    {this.props.site.sites.map((item, itemIndex) => (
                        <SiteItem>
                            <h2>{item.siteName}</h2>
                            <p>Edit</p>
                            <p>Delete</p>
                        </SiteItem>
                    ))}
                </SitesList>
            </SiteInfo>
        )
    }
}

export default Site;