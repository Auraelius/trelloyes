import React from 'react';
import './App.css';
import List from './List';

function buildCardArray(ids, cards){
  let cardArray = ids.map((key)=>{
    return({
      id: key,
      title: cards[key].title, 
      content: cards[key].content
    });
  });
  // console.log("buildCardArray: cardArray = ", cardArray);
  return(cardArray);
}


function App(props) {
  // console.log("App: props.store.lists = ", props.store.lists)

  const lists = props.store.lists;
  // console.log("App: lists = ", lists)

  const listOfLists = lists.map((list)=>{
    let cardsInTheList = buildCardArray(list.cardIds, props.store.allCards);
    // console.log('App: list params = ', {key:list.id, header:list.header, cards:cardsInTheList});
  
    return(
      <List key={list.id} header={list.header} cards={cardsInTheList} />
    );
  });
    
  // console.log('App:listOfLists:', listOfLists);
  return (
    <main className="App">
      <header className="not-the-App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div>
        {listOfLists}
      </div>
      
    </main>
  );
}

export default App;
