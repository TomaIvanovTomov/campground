import React, {Component} from 'react';

import {Content, Modal} from './styles';

import {Link} from 'react-router-dom';

class BookModal extends Component {
    constructor() {
        super();

        this.state = {
            review: 0,
            description: null
        }
    }

    render() {
        return(
            <Content>
                <Modal>
                    <h2>Would you like to book with us?</h2>                    

                    <section>
                        <button onClick={() => this.props.cancel()}>No</button>
                        <Link to={`/book/${this.props.propertyID}`}><button>Yes</button></Link>
                    </section>
                </Modal>
            </Content>
        )
    }
}

export default BookModal;