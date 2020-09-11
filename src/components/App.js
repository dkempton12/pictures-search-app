import React from 'react';
import SearchBar from './SearchBar';
import unsplash from '../apis/unsplash';
import ImageList from './ImageList';
import ImageCard from './ImageCard';

class App extends React.Component {
  state = {
    images: [],
  };
  onSearchSubmit = async (term) => {
    const response = await unsplash.get('/search/photos', {
      params: { query: term },
    });
    this.setState({ images: response.data.results });
    console.log(term);
  };
  render() {
    return (
      <div className='ui container'>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
