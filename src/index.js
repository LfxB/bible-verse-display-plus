import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { StateProvider } from './State'
import homeIndexDataReducer from './modules/homeIndexData'
import verseWindowDataReducer from './modules/verseWindowData'

const initialState = {
  homeIndexData: {
    bookIndex: 0,
    chapterIndex: 0
  },
  verseWindowData: {
    showVerseWindow: false,
    bookIndex: 0,
    chapterIndex: 0,
    verseIndex: 0
  }
}

const mainReducer = ({ homeIndexData, verseWindowData }, action) => ({
  homeIndexData: homeIndexDataReducer(homeIndexData, action),
  verseWindowData: verseWindowDataReducer(verseWindowData, action)
})

ReactDOM.render(
    <StateProvider initialState={initialState} reducer={mainReducer}>
        <App />
    </StateProvider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
