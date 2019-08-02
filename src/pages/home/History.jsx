import React from 'react';
import { StateContext } from "../../State"
import { getBookFromIndex } from "../../helpers/bibleHelper"

import "./History.css"

export default class History extends React.Component {
    onVerseClick = (event) => {
        console.log("HI!!");
    }

    render = () => {
        const [ { history } ] = this.context;

        if (!history.length) return null;

        return (
            <div className="history-container">
                {history.map((item, key) => {
                    return <p
                    key={key}
                    // onClick={this.onVerseClick}
                    >
                        {
                        getBookFromIndex(item.bookIndex) + " "
                        + (item.chapterIndex + 1).toString() + ":"
                        + (item.verseIndex + 1).toString()
                        }
                    </p>
                })}
            </div>
        )
    }
}
History.contextType = StateContext;