import React,{Component} from "react";
import withCounter from "./withCounter";


class HoverCounter2 extends Component{

    render(){
        const {count, incrementCount} = this.props

       return (<h2 onMouseOver={incrementCount}>
        Hover {count} times</h2>);
        
    }

}

export default HoverCounter2