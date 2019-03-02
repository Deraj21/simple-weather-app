import React, { Component } from 'react';
import Axios from 'axios';
import './App.css';
import Widget from './components/Widget';

import API_KEY from './private';
const BASE_URL = 'https://api.weatherbit.io/v2.0/forecast/hourly';
let now = new Date(Date.now());

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      postalCode: 85209,
      city: '',
      state: '',
      weatherData: []
    }
  }

  getWeather(){
    let { postalCode } = this.state;

    Axios.get(`${BASE_URL}?postal_code=${postalCode}&country=US&key=${API_KEY}&hours=48&units=I`)
      .then( response => {
        let { city_name, state_code } = response.data;
        let filteredData = response.data.data.filter( item => {
          let date = new Date(item.timestamp_utc);
          
          let day = now.getDay() + 1;
          if (date.getDay() === day){
            return true;
          }
          return false;
        });
        this.setState({ weatherData: filteredData, city: city_name, state: state_code });
      })
      .catch( err => console.log(`Axios Err: ${err.message}`));
  }

  componentDidMount(){
    this.getWeather();
  }

  handleChange(val){
    this.setState({ postalCode: val });
  }

  handleClick(){
    this.getWeather();
  }

  render() {

    let { weatherData, city, state, postalCode } = this.state;

    return (
      <div className="App">
        <div className="header">
          <h1>Weather</h1>
        </div>
        <div className="content">
          <div className="inputs">
            <span>Input US Postal Code:</span>
            <input onChange={e => this.handleChange(e.target.value)} value={postalCode} type="number"/>
            <button onClick={() => this.handleClick()} >GO</button>
          </div>
          <hr/>
          <Widget data={weatherData} city={city} state={state} />
        </div>
      </div>
    );
  }
}

export default App;
