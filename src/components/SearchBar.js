import React from 'react';

class SearchBar extends React.Component {
  state = {
    term: '',
  };

  onSubmitForm = (event) => {
    event.preventDefault();
    console.log(event);
  };

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };
  render() {
    return (
      <div className='ui segment'>
        <form onSubmit={this.onSubmitForm} className='ui form'>
          <div className='field'>
            <label>Image Search</label>
            <input type='text' onChange={this.onInputChange} />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
