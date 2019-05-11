import React from 'react';
import './App.css';
// import List from './List';

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
    return( 
      {key:list.id ,
      header:list.header, 
      cards:cardsInTheList}
    );
  });
    
  console.log('App:listOfLists:', listOfLists);
  return (
    <main className="App">
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div>
        {/* {listOfLists} */}
        <p>list of lists</p>
      </div>
      
    </main>
  );
}

export default App;
