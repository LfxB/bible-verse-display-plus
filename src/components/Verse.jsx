import React from 'react';
import FittedText from "yarft";
import {
    getBookFromIndex,
    getVerse
} from '../helpers/bibleHelper';

import './Verse.css'

export default class Verse extends React.Component {
    verseInfo = (bookIndex, chapterIndex, verseIndex, windowObject) => {
        const bookName = getBookFromIndex(bookIndex);

        return (
            <div className="verse-location">
                <FittedText defaultFontSize={50} windowObject={windowObject}>
                    {" — " + bookName + " " + (parseInt(chapterIndex) + 1) + " : " + (parseInt(verseIndex) + 1)}
                </FittedText>
            </div>)
    }

    render = () => {
        let { bookIndex, chapterIndex, verseIndex, windowObject } = this.props;

        if (this.props.match) {
             ({ bookIndex, chapterIndex, verseIndex } = this.props.match.params);
        }

        return (
        <div className="verse-background">
            <div className="verse-container">
                <div className="verse-text">
                    <div className="verse-text-fitter">
                        <FittedText windowObject={windowObject}>
                            {getVerse(bookIndex, chapterIndex, verseIndex).text}
                        </FittedText>
                    </div>
                </div>
                {this.verseInfo(bookIndex, chapterIndex, verseIndex, windowObject)}
            </div>
        </div>
        )
    }
}