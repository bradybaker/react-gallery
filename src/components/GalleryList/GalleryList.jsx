import React, { Component } from 'react'
import GalleryItem from '../GalleryItem/GalleryItem'
import './GalleryList.css'

class GroceryList extends Component {
    render() {
        const { galleryArray } = this.props
        return (
            <div>
                <p>Gallery goes here</p>
                <div className='galleryContainer'>
                    {
                        galleryArray.map(item => (
                            <GalleryItem item={item} key={item.id}
                                likeImage={this.props.likeImage} />
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default GroceryList