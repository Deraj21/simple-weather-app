import React from 'react';
import Hour from './Hour';

export default function Widget(props){

  let { data, city, state } = props;
  let temps = data.map( val => val.temp);

  let hot = temps.findIndex( temp => temp === Math.max(...temps) );
  let cold = temps.findIndex( temp => temp === Math.min(...temps) );

  let hours = data.map((hour, i) => {
    let date = new Date(hour.timestamp_utc);
    let time = `${date.getHours() % 12 + 1}${date.getHours() < 11 ? ' am' : date.getHours() > 22 ? ' am' : ' pm'}`;
    
    return <Hour hr={time} tmp={hour.temp} coldest={cold === i} hottest={hot === i} key={`hour-${i}`}/>
  }
  )

  return (
    <div className="Widget">
      <h2>Weather in <strong>{city}, {state}</strong> Tomorrow:</h2>
      { hours }
    </div>
  );
}
