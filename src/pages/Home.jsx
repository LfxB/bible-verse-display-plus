import React from 'react';
import NewWindow from 'react-new-window'
import Verse from '../components/Verse'
import MainContainer from '../components/MainContainer'
import {
    getBookNames,
    getBookChapterCount,
    getVersesForChapter
} from './../helpers/bibleHelper';

import './Home.css'

export default class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            bookNames: getBookNames(),
            bookIndex: 0,
            chapterIndex: 0,
            searchInput: 'Genesis',
            searchInputFocus: false,
            persistentBookName: 'Genesis',
            showVerseWindow: false,
            verseWindowData: {
                bookIndex: 0,
                chapterIndex: 0,
                verseIndex: 0
            }
        }
    }

    onBookChange = (event) => {
        this.setState({
            searchInput: event.target.value
        })
    }

    onChapterChange = (event) => {
        this.setState({
            chapterIndex: parseInt(event.target.value)
        })
    }

    onVerseClick = (bookIndex, chapterIndex, verseIndex) => {
        // window.open("/slide/" + bookIndex + "/" + chapterIndex + "/" + verseIndex, "verse-presenter");
        this.setState({
            showVerseWindow: true,
            verseWindowData: {
                bookIndex,
                chapterIndex,
                verseIndex
            }
        })
    }

    onVerseClose = () => {
        this.setState({
            showVerseWindow: false
        })
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

    onBookSelect = (book) => {
        clearTimeout(this.timeoutid);
        this.setState({
            searchInput: book.name,
            searchInputFocus: false,
            persistentBookName: book.name,
            bookIndex: book.index,
            chapterIndex: 0
        })
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

    bookChapters = () => {
        const { bookIndex, chapterIndex } = this.state;

        const count = getBookChapterCount(bookIndex);

        let ret = [];

        for (let i = 0; i < count; i++) {
            ret.push(i + 1);
        }

        return (
            <select className="home-chapter-selector" value={chapterIndex} onChange={this.onChapterChange}>
                {ret.map((chapter, key) => {
                    return  <option key={key} value={chapter - 1}>{chapter}</option>
                })}
            </select>
        )
    }

    chapterVerses = () => {
        const { bookIndex, chapterIndex } = this.state;

        let verses = getVersesForChapter(bookIndex, chapterIndex);

        return (
            <p className="home-verses">
                {verses.map((verse, key) => {
                    return <span
                    className="home-verse-single"
                    key={key}
                    tabIndex={key + 2}
                    onClick={() => this.onVerseClick(bookIndex, chapterIndex, verse.num - 1)}
                    >
                        <span className="home-verse-single-num">{verse.num + ' '}</span>
                        {verse.text + ' '}
                    </span>
                })}
            </p>
        )
    }

    verseWindow = (show) => {
        if (!show) return null;
        
        const { verseWindowData: { bookIndex, chapterIndex, verseIndex } } = this.state;

        return (
            <NewWindow
            name={"verse-presenter"}
            title={"Verse Presenter"}
            onUnload={this.onVerseClose}
            >
                <Verse {...{bookIndex, chapterIndex, verseIndex}} />
            </NewWindow>
        )
    }

    render = () => {
        const { searchInput, showVerseWindow } = this.state;

        return (
            <MainContainer>
                <div className="home-container">
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
                    <div className="home-chapter-select">
                        <h3>Chapter</h3>
                        {this.bookChapters()}
                    </div>
                    {this.chapterVerses()}
                </div>
                {this.verseWindow(showVerseWindow)}
            </MainContainer>
        )
    }
}