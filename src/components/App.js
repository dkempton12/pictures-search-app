import React from 'react';
import SearchBar from './SearchBar';
import unsplash from '../apis/unsplash';

class App extends React.Component {
  state = {
    images: [],
  };
  onFormSubmit = (term) => {
    const response = unsplash.get('/search/photos', {
      params: { query: term },
    });
    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div className='ui container'>
        <SearchBar onFormSubmit={this.onFormSubmit} />
      </div>
    );
  }
}

export default App;
