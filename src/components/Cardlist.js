import React from 'react';
import Card from './Card';

// for loops, Reacts need a key for each component so it doesn't need to re-loop if we want to change something. the Key prop ideally should have something that doesn't change. In this case, i changes if the array items get moved so something unique like the id would be better.

const CardList = ({ robots }) => {
    return (
        <div>
            {
                 robots.map((user, i) => { // i is the index
                    return (
                        <Card 
                            key={i} 
                            id={user.id} 
                            name={user.name} 
                            email={robots[i].email} //either one works
                        /> 
                    );
            
                })
            
            }
        </div>
    );
}

export default CardList;