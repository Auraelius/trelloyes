import React from 'react';

function Card(props){
  console.log("Card: props = ",props);
  return(
    <div>
      <p>{props.title}</p>
      <p>{props.content}</p>
    </div>
  );
}

export default Card;