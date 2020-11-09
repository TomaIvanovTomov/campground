import React, {Component} from 'react';

import {Content, Modal} from './styles';

import {FaStar} from 'react-icons/fa';

class ReviewModal extends Component {
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
                    <h2>Add a review</h2>

                    <section>
                        <FaStar
                            onClick={() => this.setState({review: 1})}
                            color={this.state.review >= 1 ? '#ff5e00' : '#e4e4e4'}
                        />

                        <FaStar
                            onClick={() => this.setState({review: 2})}
                            color={this.state.review >= 2 ? '#ff5e00' : '#e4e4e4'}
                        />

                        <FaStar
                            onClick={() => this.setState({review: 3})}
                            color={this.state.review >= 3 ? '#ff5e00' : '#e4e4e4'}
                        />

                        <FaStar
                            onClick={() => this.setState({review: 4})}
                            color={this.state.review >= 4 ? '#ff5e00' : '#e4e4e4'}
                        />

                        <FaStar
                            onClick={() => this.setState({review: 5})}
                            color={this.state.review >= 5 ? '#ff5e00' : '#e4e4e4'}
                        />
                    </section>

                    <div>
                        <p>Description</p>
                        <textarea
                            onChange={(e) => this.setState({description: e.target.value})}
                            placeholder="Type description here..."
                        >
                        </textarea>
                    </div>

                    <section>
                        <button onClick={() => this.props.cancel()}>Cancel</button>
                        <button onClick={() => this.props.submit(this.state.review, this.state.description)}>Submit</button>
                    </section>
                </Modal>
            </Content>
        )
    }
}

export default ReviewModal;