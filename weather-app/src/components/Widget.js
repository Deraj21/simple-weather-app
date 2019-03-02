import React from 'react';
import Hour from './Hour';

export default function Widget(props){

  let { data } = props;
  let temps = data.map( val => val.temp)
  

  let hours = data.map(hour => {
    let date = new Date(hour.timestamp_utc);
    let time = `${date.getHours() % 12 + 1}${date.getHours() < 11 ? ' am' : date.getHours() > 22 ? ' am' : ' pm'}`;
    
    return <Hour hr={time} tmp={hour.temp} coldest={false} hottest={false}/>
  }
  )

  return (
    <div className="Widget">
      <h2>Tomorrow's Weather:</h2>
      { hours }
    </div>
  );
}