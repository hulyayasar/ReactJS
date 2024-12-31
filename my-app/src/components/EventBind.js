import React,{Component} from "react";

class EventBind extends Component{


    constructor(props){
        super(props)

        this.state = {
            message: "Hello!"
        } 

        // this.clickHandler = this.clickHandler.bind(this)
    }

    // clickHandler(){
    //     this.setState({
    //         message: "Good Bye!"
    //     })
    // }

    clickHandler  = () => {
        this.setState({
            message: "Good Bye in arrow function"
        })

    }

    render(){

        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick={this.clickHandler}>Click Bind</button> 
                {/* <button onClick={this.clickHandler.bind(this)}>Click Bind</button>  */}
                {/* <button onClick={() => this.clickHandler()}>Click Bind</button> */}
            </div>
        );
    }
}

export default EventBind