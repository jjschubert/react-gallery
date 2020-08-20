import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList'
import GalleryForm from '../GalleryForm/GalleryForm.jsx'
import Divider from '@material-ui/core/Divider';
import Header from '../Header/Header.jsx';

class App extends Component {

  componentDidMount = () => {
    this.getGallery();
  }

  state = {
    galleryList: []
  }

  getGallery = () => {
    console.log('getGallery running');

    axios.get('/gallery')
      .then(response => {
        console.log(response.data);
        this.setState({
          galleryList: response.data
        })
      }).catch(error => {
        alert('error in get!')
      })
  }

  addLike = (picture) => {
    console.log('in add like');
    let id = picture.id
    console.log(id);
    axios.put(`/gallery/like/${id}`)
      .then(response => {
        this.getGallery();
      }).catch(error => {
        console.log(error);
      })
  }

  addImage = (newImage) => {
    console.log('in addImage');
    console.log(newImage);
    //send to server
    axios.post('/gallery', newImage)
      .then(response => {
        this.getGallery();
      }).catch(error => {
        console.log('post error', error);
      })
  }

  deleteImage = (id) => {
    console.log('ready to delete', id);
    // send delete request to server
    axios.delete(`/gallery/${id}`)
      .then((response) => {
        this.getGallery();
      }).catch((error) => {
        console.log(error);
      })
  }

  render() {
    return (
      <div className="App">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <Header />
        <GalleryForm addImage={this.addImage} />
        <Divider variant="middle" />
        <GalleryList galleryList={this.state.galleryList}
          addLike={this.addLike}
          deleteImage={this.deleteImage} />
      </div>
    );
  }
}

export default App;
