import React from 'react';
import SearchBar from './SearchBar';
import unsplash from '../apis/unsplash';

class App extends React.Component {
  onFormSubmit = (event) => {
    unsplash.get('/search/photos', {
      params: { query: term },
    });
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
