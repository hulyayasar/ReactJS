import React,{Component} from "react";

class LifecycleB extends Component{

    constructor(props){
        super(props)
        this.state = {
            name: 'Hulya'
        }
        console.log("LifecycleB constructor")
    }


    static getDerivedStateFromProps(props, state){
        console.log("LifecyleB getDerivedStateFromProps ")
        return null
    }


    componentDidMount(){
        console.log("LifecyleB componentDidMount ")
    }

    shouldComponentUpdate(){
        console.log("LifecyleB shouldComponentUpdate")
        return true;
    }

    getSnapshotBeforeUpdate(){
        console.log("LifecyleB getSnapshotBeforeUpdate")
        return null
    }

    componentDidUpdate(){
        console.log("LifecyleB componentDidUpdate")

    }

    
    render(){
        console.log("LifecyleB render ")
        return(
            <div>
                LifeCycleB
            </div>
        );
    }

}

export default LifecycleB