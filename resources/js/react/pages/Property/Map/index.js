import React, {Component} from 'react';

import {Content} from './styles';

class SiteMap extends Component {

    render() {
        return(
            <Content>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d211446.97854037728!2d-118.4060585399368!3d34.098751367702796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc04d6d147ab%3A0xd6c7c379fd081ed1!2sBeverly%20Hills%2C%20CA%2C%20EUA!5e0!3m2!1spt-BR!2sbr!4v1600374432859!5m2!1spt-BR!2sbr" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </Content>
        )
    }
}

export default SiteMap;