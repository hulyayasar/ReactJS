import React,{Component} from "react";
import withCounter from "./withCounter";


class HoverCounter extends Component{
   
    // constructor(props){
    //     super(props)
        
    //     this.state = {
    //         count: 0 
    //     }          
    // }

    // incrementCount = () => {

    //     //setState parameter is a fuction that gets the previous state and returns new state
    //     this.setState( prevState =>{
    //         return {count: prevState.count + 1}
    //     })
    // }


    render(){
        const {count, incrementCount } = this.props

       return (<h2 onMouseOver={incrementCount}>
        Hover {count} times</h2>);
        
    }

}

export default withCounter(HoverCounter, 5)