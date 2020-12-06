import React, { Component } from 'react';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList'
import './App.css';

class App extends Component {

  state = {
    galleryArray: [],
    images: {
      id: 0,
      path: '',
      description: '',
      likes: 0
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

  render() {
    const { galleryArray } = this.state
    console.log('images', this.state)
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Some Highlights from Brady Baker's Life</h1>
        </header>
        <GalleryList galleryArray={galleryArray}
          likeImage={this.likeImage} />
      </div>
    );
  }
}

export default App;
