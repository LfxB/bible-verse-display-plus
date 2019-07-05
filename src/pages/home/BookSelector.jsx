import React from 'react';
import {
    getBookNames
} from '../../helpers/bibleHelper';
import { StateContext } from "./../../State";
import { selectBook } from "../../modules/homeIndexData";

import './BookSelector.css';

export default class BookSelector extends React.Component {
    constructor() {
        super()
        this.state = {
            bookNames: getBookNames(),
            searchInput: 'Genesis',
            searchInputFocus: false,
            persistentBookName: 'Genesis'
        }
    }

    onBookChange = (event) => {
        this.setState({
            searchInput: event.target.value
        })
    }

    onBookSelect = (book) => {
        clearTimeout(this.timeoutid);
        this.setState({
            searchInput: book.name,
            searchInputFocus: false,
            persistentBookName: book.name,
        })
        // const [ { homeIndexData }, dispatch ] = this.context;
        const dispatch = this.context[1];
        dispatch(selectBook(book.index));
    }
    
    toggleSearchInputFocus = (val, timeout) => {
        if (timeout === undefined) {
            this.setState({
                searchInputFocus: val
            })
        } else {
            this.timeoutid = setTimeout(() => {
                this.setState({
                    searchInputFocus: val,
                    searchInput: this.state.persistentBookName
                })
            }, timeout)
        }
    }

    bookResultsHtml = () => {
        const { searchInput, bookNames, searchInputFocus } = this.state;

        if (!searchInputFocus) return null;

        let res = bookNames.filter(book => {
            return book.name.toLowerCase().includes(searchInput.toLowerCase());
        })

        return (
            <div className="home-book-results">
                {res.map((book, key) => {
                    return (
                    <div
                        key={key}
                        className="home-book-single-result"
                        onClick={() => this.onBookSelect(book)}
                    >
                    {book.name}
                    </div>)
                })}
            </div>
        )
    }
    
    render = () => {
        const { searchInput } = this.state;

        return (
            <div className="home-search-container">
                <input
                    className="home-book-search-input"
                    type='text' value={searchInput}
                    onChange={this.onBookChange}
                    onFocus={() => {
                        this.toggleSearchInputFocus(true)
                        this.setState({
                            searchInput: ''
                        })
                    }}
                    onBlur={() => this.toggleSearchInputFocus(false, 200)}
                />
                {this.bookResultsHtml()}
            </div>
        )
    }
}
BookSelector.contextType = StateContext;