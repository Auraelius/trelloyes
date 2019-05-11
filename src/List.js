import React from 'react';

function List(props){
  console.log(props);
  return(
  <div>
    <p>{props.header}</p>
  </div>
  
    );
}
export default List;