import React from "react";

const withCounter = (WrappedComponent, incrementNumber) => {

    class WithCounter extends React.Component{

        constructor(props){
            super(props)
            
            this.state = {
                count: 0 
            }          
        }
    
        incrementCount = () => {
    
            //setState parameter is a fuction that gets the previous state and returns new state
            this.setState( prevState =>{
                return {count: prevState.count + incrementNumber}
            })
        }

        render(){
            return<WrappedComponent 
            count = {this.state.count}
            incrementCount = {this.incrementCount}
            {...this.props} />
        }

    }
    return WithCounter
}

export default withCounter