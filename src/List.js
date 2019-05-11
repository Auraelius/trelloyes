import React from 'react';
import Card from './Card.js';

function List(props){
  // console.log("List: props = ",props);
  const theCards = props.cards.map((card)=>{
    // const newCard = {title: card.title, content: card.content};
    // console.log("List: new card = ",newCard);
    return(
      <Card key={card.id} title={card.title} content={card.content}/>
    );
  });

  //console.log("List: theCards = ",theCards);
  return(
  <section className='List'>
    <header className="List-header">
      <h3>({props.header}</h3>
    </header>
    <div className='List-cards'>
      {theCards}
    </div>
  </section>
  
    );
}
export default List;