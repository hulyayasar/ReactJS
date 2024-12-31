import React, {Component} from "react";

class Welcome extends Component{

    //returns null or html 
    // we do not need to pass props asa paramenter cause it is already reserved in Components class
    render(){
        const {name, heroName} = this.props
        //const {state1, state2} = this.state
        return <h1>Hello {name} whose hero Name is {heroName}</h1>
    }

}
export default Welcome
