import React from "react";

function clickHandler(){
    console.log("button is clicked")
}

const FunctionClick = () => {

    return(
        <div>
            <button onClick={clickHandler}>Click</button>
        </div>
    );

}

export default FunctionClick