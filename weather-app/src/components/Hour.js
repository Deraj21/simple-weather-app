import React from 'react';

export default function Hour(props){

  let { hour, temp, coldest, hottest } = props;
  let color = 'white';

  if (coldest){
    color = 'rgba(0,143,254,.45)'
  } else if (hottest){
    color = 'rgba(254,0,76,.45)'
  }

  return (
    <div style={{ backgroundColor: color }}className="Hour">
      <p>{hour}:</p>
      <p>{temp}°</p>
    </div>
  );
}