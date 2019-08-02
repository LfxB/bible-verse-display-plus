import React from 'react';
import BookSelector from "./home/BookSelector"
import ChapterSelector from "./home/ChapterSelector"
import VerseSelector from "./home/VerseSelector"
import VersePopup from "./home/VersePopup"
import PopupStatus from "./home/PopupStatus"
import History from "./home/History"
import MainContainer from '../components/MainContainer'

import './Home.css'

export default class Home extends React.Component {
    render = () => {
        return (
            <MainContainer>
                <div className="home-container">
                    <div className="home-left">
                        <BookSelector />
                        <ChapterSelector />
                        <VerseSelector />
                    </div>
                    <div className="home-right">
                        <PopupStatus />
                        <History />
                    </div>
                </div>
                <VersePopup />
            </MainContainer>
        )
    }
}