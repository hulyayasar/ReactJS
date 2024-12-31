import React from "react";

function Person({person}){
   
    return (
        <h2> I am {person.name} whose id is {person.id} and {person.age} years old with {person.skill} skill</h2>
    );
}

export default Person