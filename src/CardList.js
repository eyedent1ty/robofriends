import React from  'react';
import Card from './Card';

const CardList = ({ robots }) => {
  return (
    <div>
      {
        // You can able to render all of the items in the list
        robots.map((robot, i) => {
          return (
            <Card 
              key={robots[i].id}
              id={robots[i].id} 
              name={robots[i].name} 
              email={robots[i].email} 
            />
          );
        })  
      }
    </div>
  );
}

export default CardList;