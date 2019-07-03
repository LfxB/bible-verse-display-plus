import React from 'react';
import './MainContainer.css'

export default class MainContainer extends React.Component {
    render = () => {
        return (
            <div className="main-container">
                <h1 className="main-container-header">Bible Verse Display</h1>
                <div className="children-container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}