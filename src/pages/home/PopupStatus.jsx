import React from 'react';
import { StateContext } from "../../State"
import { getBookFromIndex } from "../../helpers/bibleHelper"

import "./PopupStatus.css"

export default class PopupStatus extends React.Component {
    render = () => {
        const [ { verseWindowData } ] = this.context;

        const { showVerseWindow, bookIndex, chapterIndex, verseIndex } = verseWindowData;

        if (!showVerseWindow) return null;

        return (
            <div className="popup-status">
                <span>Currently viewing:</span>
                {
                    " " +
                    getBookFromIndex(bookIndex) + " "
                    + (chapterIndex + 1).toString() + ":"
                    + (verseIndex + 1).toString()
                }
            </div>
        )
    }
}
PopupStatus.contextType = StateContext;