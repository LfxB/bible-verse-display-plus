import React from 'react';
import NewWindow from 'react-new-window'
import Verse from '../../components/Verse'
import { StateContext } from "./../../State"
import { hideVerseWindow } from "./../../modules/verseWindowData"
import { updateWindowObject } from "./../../modules/windowObj"

export default class VersePopup extends React.Component {
    onOpen = (windowObj) => {
        const dispatch = this.context[1];
        dispatch(updateWindowObject(windowObj));
    }

    render = () => {
        const [ { verseWindowData }, dispatch ] = this.context;

        const { showVerseWindow, bookIndex, chapterIndex, verseIndex } = verseWindowData;

        if (!showVerseWindow) return null;

        return (
            <NewWindow
            name={"verse-presenter"}
            title={"Verse Presenter"}
            onOpen={this.onOpen}
            onUnload={() => dispatch(hideVerseWindow())}
            >
                <Verse {...{bookIndex, chapterIndex, verseIndex}} />
            </NewWindow>
        )
    }
}
VersePopup.contextType = StateContext;