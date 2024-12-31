import React from "react";
import Person from "./Person";

function NameList(){

    const names = ['Hulya', 'Vehbi', 'Numan', 'Hulya']

    const persons = [
        {
            id: 1,
            name: 'Bruce',
            age: 44,
            skill: 'Angular'
        },
        {
            id: 2,
            name: 'Diana',
            age: 22,
            skill: 'Via'
        },
        {
            id: 3,
            name: 'John',
            age: 55,
            skill: 'Java'
        }
    ]
    // const personList = persons.map(
    //     person => <Person key={person.id} person = {person}></Person>)

    const nameList = names.map((name, index) => <h2 key= {index}>name is {name} and index is {index}</h2>)

    return (
        <div> { nameList } </div>
    );
}

export default NameList