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
            <div className='galleryCard'>
                <p onClick={this.togglePicture}>
                    {this.state.toggle ? <> <img src={path} alt='GalleryImage' width={300} height={320} /> <p>{likes}</p> <button>Like</button> </>
                        : <><p className='description'>{description}</p> <p>{likes}</p> <button onClick={(event) => likeImage(event, id)}>Like</button></>}</p>
            </div>
        )
    }
}

export default GalleryItem