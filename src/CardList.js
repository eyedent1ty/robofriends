import React from  'react';
import Card from './Card';

const CardList = ({ robots }) => {
  return (
    <div>
      {
        // You can able to render all of the items in the list
        robots.map((robot) => {
          // destructuring
          let {id, name, email} = robot;
          return (
            <Card 
              key={id}
              id={id} 
              name={name} 
              email={email} 
            />
          );
        })  
      }
    </div>
  );
}

export default CardList;