import React, {Component} from 'react';

const google = window.google;

const {
    withGoogleMap,
    GoogleMap,
    DirectionsRenderer,
} = require("react-google-maps");

class Map extends Component {
    constructor(props) {
        super(props);

        this.state = {
            directions: []
        };

        this.getGoogleDirections = this.getGoogleDirections.bind(this);
    }

    getGoogleDirections() {
        let directionsService = new google.maps.DirectionsService();

        let origin = this.props.origin;
        let destination = this.props.destination;
        let legs = this.props.legs.legs;

        const waypts = [];

        if (legs[0]) {
            if (legs[0].place != "") {
                legs.map(leg => waypts.push({
                    location: leg.place ? leg.place : leg.destination
                }));
            }
        }

        directionsService.route(
            {
                origin: origin,
                destination: destination,
                waypoints: waypts,
                travelMode: google.maps.TravelMode.DRIVING,
            }, (result, status) => {
                if (status === google.maps.DirectionsStatus.OK) {
                    this.setState({
                        directions: result
                    });
                } else {
                    console.error(`error fetching directions ${result}`);
                }
            }
        );
    }

    componentDidMount() {
        this.getGoogleDirections();
    }

    componentDidUpdate(prevState) {
        if (this.props.origin != prevState.origin ||
            this.props.destination != prevState.destination ||
            this.props.legs != prevState.legs) {
            this.getGoogleDirections();
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.origin != nextProps.origin ||
            this.props.destination != nextProps.destination ||
            this.props.legs != nextProps.legs ||
            this.state.directions != nextState.directions) {
            return true;
        }
        return false;
    }

    render() {
        const MapComponent = withGoogleMap(props => (
            <GoogleMap
                defaultCenter={new google.maps.LatLng(41.8507300, -87.6512600)}
                defaultZoom={5}
            >

                <DirectionsRenderer
                    directions={props.directions}
                />

            </GoogleMap>
        ));
        return(
            <MapComponent
                loadingElement={<div style={{ height: `100%`}} />}
                containerElement={<div style={{ height: `1200px`}} />}
                mapElement={<div style={{ height: `100%` }} />}
                directions={this.state.directions}
            />
        )
    }
}

export default Map;
