import React,{Component} from "react";

class Counter2 extends Component{

    constructor(props){
        super(props)
        
        this.state = {
            count: 0 
        }          
    }

    incrementCount = () => {

        //setState parameter is a fuction that gets the previous state and returns new state
        this.setState( prevState =>{
            return {count: prevState.count + 1}
        })
    }

   
    render(){

       return (
        <div>
            {this.props.render(this.state.count, this.incrementCount)}
        </div>
       );
        
    }

}

export default Counter2