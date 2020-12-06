import React, { Component } from 'react';
import './GalleryItem.css'

class GalleryItem extends Component {

    state = {
        toggle: true
    }

    togglePicture = () => {
        this.setState({
            toggle: !this.state.toggle
        })
    }

    render() {
        const { path, description, likes, id } = this.props.item
        const { likeImage } = this.props
        return (
            <div className='galleryCard hvr-grow-shadow'>
                <div onClick={this.togglePicture}>
                    {this.state.toggle ?
                        <img src={path} alt='GalleryImage' width={400} height={420} /> :
                        <p className='description'>{description}</p>}</div>
                <p>{likes}</p>
                <button onClick={(event) => likeImage(event, id)}>Like</button>
            </div>
        )
    }
}

export default GalleryItem