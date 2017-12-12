import React, {Component} from 'react';
import logo from './dhm.jpeg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to DHM School</h1>
                </header>
                <p className="App-intro">
                    This is multiplication & addition table !
                </p>
                <div>
                    <h1>Multiplication</h1>
                    <div><h3>2*1={2}</h3></div>
                    <div><h3>2*2={2 * 2}</h3></div>
                    <div><h3>2*3={2 * 3}</h3></div>
                    <div><h3>2*4={2 * 4}</h3></div>
                </div>
                <div>
                    <h1>Addition</h1>
                    <div><h3>2+1={2 + 1}</h3></div>
                    <div><h3>2+2={2 + 2}</h3></div>
                    <div><h3>2+3={2 + 3}</h3></div>
                    <div><h3>2+4={2 + 4}</h3></div>
                </div>
            </div>
        );
    }
}

export default App;
