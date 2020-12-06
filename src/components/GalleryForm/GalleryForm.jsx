import React, { Component } from 'react'
import Button from '@material-ui/core/Button';

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
                    <Button type='submit' variant="contained" color="primary">Add Image</Button>
                </form>
            </div>
        )
    }
}

export default GalleryForm;