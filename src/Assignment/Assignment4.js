import React, { Component } from 'react';
import './App.css';

const ValidationComponent = (props) => {
    return (
        <div hidden={props.textLength === 0}>
            {
                props.textLength < 5 ?
                    <p>Text too short</p> :
                    <p>Text long enough</p>
            }
        </div>
    )
};

const CharComponent = (props) => {
    return (
        <>
            {
                props.textChar.map((ltr, index) => {
                    return (
                        <div
                            key={index}
                            style={{
                                display: 'inline-block',
                                padding: 16,
                                textAlign: 'center',
                                margin: 16,
                                border: '1px solid black'
                            }}
                            onClick={() => props.delete(index)}>{ltr}
                        </div>
                    )
                })
            }
        </>
    )
};

class App extends Component {
    state = {
        text: ''
    }

    inputHandler = (event) => {
        this.setState({
            text: event.target.value
        })
    }

    deleteHandler = (ltrIndex) => {
        const text = this.state.text.split('');
        text.splice(ltrIndex, 1);
        this.setState({
            text: text.join('')
        })
    };

    render() {
        return (
            <div className="App">
                <input type="text" onChange={this.inputHandler} value={this.state.text} />
                <p>{this.state.text.length}</p>
                <ValidationComponent textLength={this.state.text.length} />
                <CharComponent
                    textChar={this.state.text.split('')}
                    delete={this.deleteHandler} />
            </div>
        );
    }
}

export default App;
