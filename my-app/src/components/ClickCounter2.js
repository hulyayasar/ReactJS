import React,{Component} from "react";
import withCounter from "./withCounter";

class ClickCounter2 extends Component{

    render(){
        const {count, incrementCount} = this.props
       return (      
            <button onClick={incrementCount} >click {count} times</button>      
       );
        
    }
}

export default ClickCounter2