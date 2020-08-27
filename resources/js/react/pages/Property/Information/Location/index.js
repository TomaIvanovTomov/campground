import React, {Component} from 'react';

class Location extends Component {

    render() {
        return(
            <iframe
                title="google-maps"
                src={`https://maps.google.com/maps?q=${this.props.address}&output=embed`}
                width="100%"
                height="350"
                frameBorder="0"
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
            >
            </iframe>
        )
    }
}

export default Location;