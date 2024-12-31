import React,{Component} from "react";

class UserGreetings extends Component{

    constructor(props){
        super(props)

        this.state = {
            isLoggedIn: false
        }
    }

    render(){

       
        //------Short circuit operator
        // if it is true return sth else return nothing
        return (
            this.state.isLoggedIn && <div>Welcome Hulya</div>
        );

        //------Ternary Conditional Operators
        // return (
        //     this.state.isLoggedIn ? <div>Welcome Hulya</div> : <div>Welcome Guest</div> 
        // );
        

        //-------Element variable
        // let message

        // if(this.state.isLoggedIn){
        //     message = <div>Welcome Hulya</div>
        // }else{
        //     message = <div>Welcome Guest</div>
        // }

        // return <div>{message}</div>

        
        //------If Else 
        // if( this.state.isLoggedIn){
        //     return  <div>Welcome Hulya</div>
        // }
        // else{
        //     return  <div>Welcome Guest</div>
        // } 
        
        
    }

}

export default UserGreetings