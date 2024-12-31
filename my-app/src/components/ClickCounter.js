import React,{Component} from "react";
import withCounter from "./withCounter";

class ClickCounter extends Component{
   
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

       return (
    
        <div>
            <button onClick={incrementCount} >
             {this.props.name} clicked {count} times</button>
        </div>
       );
        
    }

}

export default withCounter(ClickCounter, 10)