import React, { Component } from 'react';
import { Modal } from '../../Modal/Modal';



export class ImageGalleryItem extends Component {
    // console.log('url: ', webformatURL);
    state = {
        showModal: false
    }

    toggleModal = () => {
        this.setState(prevState => ({showModal: !prevState.showModal}))
    }

    render() {
        return (
            <li className='ImageGalleryItem'>
                <img onClick={this.toggleModal} className="ImageGalleryItem-image" src={this.props.webformatURL} alt="" />
                { this.state.showModal && <Modal modalImg={this.props.largeImageURL} closeModal={this.toggleModal}/> }
            </li>
        )
    }
}