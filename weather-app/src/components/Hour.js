import React from 'react';

export default function Hour(props){

  let { hour, temp, coldest, hottest } = props;

  return (
    <div className="Hour">
      <p>{hour}</p>
      <p>{temp} deg</p>
    </div>
  );
}