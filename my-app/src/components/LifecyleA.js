import React,{Component} from "react";
import LifecycleB from "./LifecycleB";

class LifecycleA extends Component{

    constructor(props){
        super(props)
        this.state = {
            name: 'Hulya'
        }
        console.log("LifecycleA constructor")
    }


    static getDerivedStateFromProps(props, state){
        console.log("LifecyleA getDerivedStateFromProps ")
        return null
    }


    componentDidMount(){
        console.log("LifecyleA componentDidMount ")
    }
    
    shouldComponentUpdate(){
        console.log("LifecyleA shouldComponentUpdate")
        return true;
    }

    getSnapshotBeforeUpdate(){
        console.log("LifecyleA getSnapshotBeforeUpdate")
        return null
    }

    componentDidUpdate(){
        console.log("LifecyleA componentDidUpdate")

    }

    changeState = () =>{
        this.setState({
            name: "changed"
        })
    }
    
    render(){
        console.log("LifecyleA render ")
        return(
            <div>
                <div>LifeCycleA</div>
                <button onClick={this.changeState}>Change State</button>
                <LifecycleB />
            </div>
        );
    }

}

export default LifecycleA