import React from 'react';

class ImageCard extends React.Component {
  const {urls, description} = this.props.image;
  render() {
    return (
      <div>
        <img src={urls.regular} alt={description}
      </div>
    )
  }
}

export default ImageCard;
