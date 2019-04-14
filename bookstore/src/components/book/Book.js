import React from 'react';
import "./Book.css";

function Book(props) {
  return (
    <div className="book">
       <img src={props.data.thumbnailUrl} />
        <h3>{props.data.title}</h3>
       
        
        

      
    </div>
  )
}

export default Book;
