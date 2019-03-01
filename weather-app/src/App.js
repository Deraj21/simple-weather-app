import React, { Component } from 'react';
import Axios from 'axios';

import './App.css';
import Widget from './components/Widget';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      postalCode: 0,
      weatherData: []
    }
  }

  componentDidMount(){
    console.log(this.state);
  }

  handleChange(val){
    console.log('handlingchange:', val);
  }

  handleClick(){
    console.log(this.state)
  }

  render() {

    let { postalCode, weatherData } = this.state;

    return (
      <div className="App">
        <div className="header">
          <h1>Weather</h1>
        </div>
        <div className="content">
          <div className="inputs">
            <span>Input Postal Code:</span>
            <input onChange={e => this.handleChange(e.target.value)} type="number"/>
            <button onClick={() => this.handleClick()} >GO</button>
          </div>
          <hr/>
          <Widget data={weatherData} />
        </div>
      </div>
    );
  }
}

export default App;
