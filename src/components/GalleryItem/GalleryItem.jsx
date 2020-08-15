import React, { Component } from 'react';
import './GalleryItem.css';
import './bootstrap.css'


class GalleryItem extends Component {

    state = {
        isPhoto: true
    }

    flipView = () => {
        this.setState({
            isPhoto: !this.state.isPhoto
        })
    }


    render() {
        console.log(this.props);
        return (
            <div className='gallery-block'>
                {this.state.isPhoto ?
                    <img src={this.props.picture.path} onClick={this.flipView} />
                    : <div className='photoDesc' onClick={this.flipView}>
                        <p className='descText'>{this.props.picture.description}</p></div>}
                <p>This photo has {this.props.picture.likes} likes.</p>
                <button className="btn btn-secondary btn-sm" 
                onClick={() => this.props.addLike(this.props.picture)}>Like</button>
                <br />
            </div>
        );
    }
}

export default GalleryItem;