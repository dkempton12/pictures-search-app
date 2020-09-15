import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    // setSpans will run after image is fully loaded
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    console.log(this.imageRef.current.clientHeight);
  };
  render() {
    const { urls, description } = this.props.image;
    return (
      <div>
        <img src={urls.regular} alt={description} ref={this.imageRef} />
      </div>
    );
  }
}

export default ImageCard;
