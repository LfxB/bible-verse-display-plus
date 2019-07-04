import React from 'react';
import {
    getVersesForChapter
} from '../../helpers/bibleHelper';
import { StateContext } from "./../../State"
import { showVerseWindow } from "./../../modules/verseWindowData"

export default class VerseSelector extends React.Component {
    onVerseClick = (bookIndex, chapterIndex, verseIndex) => {
        // window.open("/slide/" + bookIndex + "/" + chapterIndex + "/" + verseIndex, "verse-presenter");

        // const [ { homeIndexData }, dispatch ] = this.context;
        const dispatch = this.context[1];
        dispatch(showVerseWindow(bookIndex, chapterIndex, verseIndex));
    }

    render = () => {
        const [ { homeIndexData } ] = this.context;

        let verses = getVersesForChapter(homeIndexData.bookIndex, homeIndexData.chapterIndex);

        return (
            <p className="home-verses">
                {verses.map((verse, key) => {
                    return <span
                    className="home-verse-single"
                    key={key}
                    tabIndex={key + 2}
                    onClick={() => this.onVerseClick(homeIndexData.bookIndex, homeIndexData.chapterIndex, verse.num - 1)}
                    >
                        <span className="home-verse-single-num">{verse.num + ' '}</span>
                        {verse.text + ' '}
                    </span>
                })}
            </p>
        )
    }
}
VerseSelector.contextType = StateContext;