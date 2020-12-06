import React, { Component } from 'react'

class GalleryForm extends Component {
    render() {
        const { path, description } = this.props.images
        const { handleChangeFor, handleSubmit } = this.props
        return (
            <div>
                <h3>Add Image</h3>
                <form onSubmit={handleSubmit}>
                    <label>Image URL: </label>
                    <input type='text' value={path} onChange={(event) => handleChangeFor(event, 'path')} />
                    <label>Image Description: </label>
                    <input type='text' value={description} onChange={(event) => handleChangeFor(event, 'description')} />
                    <button type='submit'>Add Image</button>
                </form>
            </div>
        )
    }
}

export default GalleryForm;