import React from 'react';
import BookSelector from "./home/BookSelector"
import ChapterSelector from "./home/ChapterSelector"
import VerseSelector from "./home/VerseSelector"
import VersePopup from "./home/VersePopup"
import MainContainer from '../components/MainContainer'

import './Home.css'

export default class Home extends React.Component {
    render = () => {
        return (
            <MainContainer>
                <div className="home-container">
                    <BookSelector />
                    <ChapterSelector />
                    <VerseSelector />
                </div>
                <VersePopup />
            </MainContainer>
        )
    }
}