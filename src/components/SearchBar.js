import React from 'react';

class SearchBar extends React.Component {
  state = {
    term: '',
  };

  onSubmitForm(event) {
    event.preventDefault();
    console.log(event);
  }
  render() {
    return (
      <div className='ui segment'>
        <form onSubmit={this.onSubmitForm} className='ui form'>
          <div className='field'>
            <label>Image Search</label>
            <input
              type='text'
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
