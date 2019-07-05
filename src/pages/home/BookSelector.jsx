import React from "react";
import { getBookNames } from "../../helpers/bibleHelper";
import { StateContext } from "./../../State";
import { selectBook } from "../../modules/homeIndexData";

import "./BookSelector.css";

export default class BookSelector extends React.Component {
  constructor() {
    super();

    this.results = React.createRef();

    this.state = {
      bookNames: getBookNames(),
      searchInput: "Genesis",
      searchInputFocus: false,
      persistentBookName: "Genesis"
    };
  }

  onBookChange = event => {
    this.setState({
      searchInput: event.target.value
    });
  };

  onBookSelect = book => {
    this.setState({
      searchInput: book.name,
      searchInputFocus: false,
      persistentBookName: book.name
    });
    // const [ { homeIndexData }, dispatch ] = this.context;
    const dispatch = this.context[1];
    dispatch(selectBook(book.index));
  };

  toggleSearchInputFocus = (event, val) => {
    if (val) {
      this.setState({
        searchInput: "",
        searchInputFocus: true
      });
    } else {
      if (
        event.relatedTarget &&
        event.relatedTarget.parentElement &&
        event.relatedTarget.parentElement === this.results.current
      ) {
        return;
      }

      this.setState({
        searchInputFocus: false,
        searchInput: this.state.persistentBookName
      });
    }
  };

  bookResultsHtml = () => {
    const { searchInput, bookNames, searchInputFocus } = this.state;

    if (!searchInputFocus) return null;

    let res = bookNames.filter(book => {
      return book.name.toLowerCase().includes(searchInput.toLowerCase());
    });

    return (
      <div
        className="home-book-results"
        id="home-book-results"
        ref={this.results}
      >
        {res.map((book, key) => {
          return (
            <div
              key={key}
              className="home-book-single-result"
              onClick={() => this.onBookSelect(book)}
              tabIndex={0}
            >
              {book.name}
            </div>
          );
        })}
      </div>
    );
  };

  render = () => {
    const { searchInput } = this.state;

    return (
      <div className="home-search-container">
        <input
          className="home-book-search-input"
          type="text"
          value={searchInput}
          onChange={this.onBookChange}
          onFocus={event => {
            this.toggleSearchInputFocus(event, true);
          }}
          onBlur={event => this.toggleSearchInputFocus(event, false)}
        />
        {this.bookResultsHtml()}
      </div>
    );
  };
}
BookSelector.contextType = StateContext;
