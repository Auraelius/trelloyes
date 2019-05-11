import React from 'react';
import Card from './Card.js';

function List(props){
  console.log("List: props = ",props);
  const theCards = props.cards.map((card)=>{
    const newCard = {title: card.title, content: card.content};
    console.log("List: new card = ",newCard);
    return(
      <Card title={card.title} content={card.content}/>
    );
  });

  console.log("List: theCards = ",theCards);
  return(
  <div>
    <p>({props.header}</p>
    {theCards}
  </div>
  
    );
}
export default List;