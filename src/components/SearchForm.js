import React from 'react';

class SearchBox extends React.Component {
    constructor(props) {
        super(props);
        this.input = null;
    }

    handleSearch = () => {
        const inputValue =  document.querySelector(".searchbox").value;
        if (this.props.onSearch) {
            this.props.onSearch(inputValue);
        }
    };

    handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            this.handleSearch();
        }
    };

    render() {
        return (
          <div className='horizontal-flex'>
            <input
              className="searchbox"
              type="text"
              defaultValue={this.props.initialQuery || ""}
              onKeyDown={this.handleKeyPress}
            />
            <button
                className='button'
                name='search'
                onClick={this.handleSearch}
            >
              Search
            </button>
          </div>
        );
      }
}

export default SearchBox