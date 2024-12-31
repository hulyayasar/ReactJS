import React,{Component} from "react";

class ClassClicked extends Component{

    clickHandler() {
        console.log("Class button clicked")     
    }

    render(){
        return(
            <div>
                <button onClick={this.clickHandler}>Click Me</button>
            </div>
        );
    }

}

export default ClassClicked