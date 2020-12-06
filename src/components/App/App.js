import React, { Component } from 'react';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList'
import GalleryForm from '../GalleryForm/GalleryForm'
import './App.css';

class App extends Component {

  state = {
    galleryArray: [],
    images: {
      path: '',
      description: '',
    }
  }

  componentDidMount() {
    this.getImages()
  }

  getImages = () => {
    axios.get('/gallery')
      .then((response) => {
        this.setState({
          galleryArray: response.data
        })
      })
      .catch((err) => {
        console.log('Error in client GET', err)
      })
  }

  postImage = (newImage) => {
    axios.post('/gallery', newImage)
      .then((response) => {
        this.getImages()
      })
      .catch((err) => {
        console.log('Error in Client POST', err)
      })
  }

  likeImage = (event, imageId) => {
    axios.put(`/gallery/like/${imageId}`)
      .then((response) => {
        console.log(`PUT update`, response.data);
        this.getImages();
      })
      .catch((error) => {
        console.log(`Error in client PUT`, error);
      })
  }

  handleChangeFor = (event, propertyName) => {
    this.setState({
      images: {
        ...this.state.images,
        [propertyName]: event.target.value,
      }
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.postImage(this.state.images)
    this.setState({
      images: {
        path: '',
        description: ''
      },
    });
  }

  render() {
    const { galleryArray } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Some Highlights from Brady Baker's Life</h1>
        </header>
        <GalleryForm images={this.state.images}
          handleChangeFor={this.handleChangeFor}
          handleSubmit={this.handleSubmit}
        />
        <GalleryList galleryArray={galleryArray}
          likeImage={this.likeImage} />
      </div>
    );
  }
}

export default App;
