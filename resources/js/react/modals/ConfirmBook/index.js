import React, {Component} from 'react';

import {Content, Modal} from './styles';

class ConfirmBookModal extends Component {
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
                    <h2>Success!</h2>

                    <p>Thanks for booking with us!</p>                    

                    <section>
                        <button onClick={() => this.props.cancel()}>Close</button>
                    </section>
                </Modal>
            </Content>
        )
    }
}

export default ConfirmBookModal;