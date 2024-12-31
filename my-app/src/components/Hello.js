import React from "react";

const Hello = () => {


    //JSX implementation 
    // return (
    //     <div className = 'dummyClass'>
    //         <h1>Hello Hello Hulya</h1>
    //     </div>
    // )

    //using React method createElements (not using JSX)
    //this method needs min 3 paramenter 
    //1-> String =  type of html tag we render ,     2-> properities,   3-> children tag
    return  React.createElement(
        'div',
         {id: 'hello', className: 'dummyClass'},
         React.createElement('h1',null, 'Hello Hello Hulya')
        )
}

export default Hello