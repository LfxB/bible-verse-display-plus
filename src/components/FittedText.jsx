import React from 'react';

export default class FittedText extends React.Component {
    constructor(props) {
        super(props)

        const { defaultFontSize } = this.props;

        this.state = {
            visible: false,
            fontSize: !defaultFontSize ? 200 : defaultFontSize
        }

        this.text = React.createRef();
    }

    getTextElement = () => {
        return this.text.current;
    }

    getTextParentElement = () => {
        return this.text.current.parentElement;
    }

    updateText = () => {
        const element = this.getTextElement();
        const parent = this.getTextParentElement();

        if (!element) return;

        let { fontSize } = this.state;

        element.style.fontSize = fontSize + "px";

        while (parent.scrollHeight > parent.clientHeight) {
            fontSize = Math.floor(fontSize * 0.95);
            element.style.fontSize = fontSize + "px";
        }
    }

    componentDidMount = () => {
        this.updateText();

        window.addEventListener("resize", this.updateText);
    }

    componentDidUpdate = () => {
        this.updateText();
    }

    componentWillUnmount = () => {
        window.removeEventListener("resize", this.updateText);
    }

    render = () => {
        let { fontSize } = this.state;

        const style = {
            opacity: 1,
            fontSize
        }
        
        return <div ref={this.text} style={style}>{this.props.children}</div>
    }
}