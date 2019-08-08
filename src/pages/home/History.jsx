import React from 'react';
import { StateContext } from "../../State"
import { getBookFromIndex } from "../../helpers/bibleHelper"
import { selectBookAndChapter } from "../../modules/homeIndexData"

import "./History.css"

export default class History extends React.Component {
    onVerseClick = (bookIndex, chapterIndex) => {
        const dispatch = this.context[1];
        dispatch(selectBookAndChapter(bookIndex, chapterIndex));
    }

    render = () => {
        const [ { history } ] = this.context;

        if (!history.length) {
            return (
                <div className="history-instructions">
                    <h3>Instructions</h3>
                    <ul>
                        <li>You can search by book! Just click the book name and start typing.</li>
                        <li>Click a verse to open a new window which you can drag to a secondary monitor/projector.</li>
                        <li>Your previously viewed verses will appear here; click them to navigate back to them.</li>
                    </ul>
                </div>
            )
        }

        return (
            <div className="history-container">
                <div className="history-items custom-scrollbar">
                    {history.map((item, key) => {
                        return <p
                        key={key}
                        onClick={() => this.onVerseClick(item.bookIndex, item.chapterIndex)}
                        >
                            {
                            getBookFromIndex(item.bookIndex) + " "
                            + (item.chapterIndex + 1).toString() + ":"
                            + (item.verseIndex + 1).toString()
                            }
                        </p>
                    })}
                </div>
            </div>
        )
    }
}
History.contextType = StateContext;