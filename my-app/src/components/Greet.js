import React from "react";

// function Greet(){
//     return <h1>Hello Hulya</h1>
// }


//arrow functions
// const Greet = () => <h1>Hello Hulya with arrow function</h1>

//using props

// i can return only one html element that is why i put it in div


const Greet = (props) => {
    //console.log(props)
    const {name, heroName, children} = props
return (
    <div>
        <h1>Hello {name}  whose heroName is {heroName} </h1>
        {children}
    </div>
    
)
}


export default Greet