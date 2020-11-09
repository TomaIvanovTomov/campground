import React, {Component} from 'react';

import {Content, List, Img} from './styles';

import img1 from '../../../assets/properties/1/1.jpg';
import img2 from '../../../assets/properties/1/2.jpg';
import img3 from '../../../assets/properties/1/3.jpg';
import img4 from '../../../assets/properties/1/4.jpg';
import img5 from '../../../assets/properties/1/5.jpg';

class Pictures extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Content>
                <img src={this.props.images ? this.props.images[0] : ""} />

                <List>
                    {this.props.images && this.props.images.map((image, index) => (
                        <Img
                            selected={index == 0 ? true : false}
                            onClick={() => this.setState({selected: image})}
                            src={image}
                        />)
                    )}

                </List>
            </Content>
        )
    }
}

export default Pictures;
