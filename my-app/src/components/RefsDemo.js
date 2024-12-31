import React,{Component} from "react";

class RefsDemo extends Component{

    constructor(props){
        super(props)
        this.inputRef = React.createRef()

        //creating ref
        this.cbReg = null
        //method assing dom element to the element we created 
        //accept dom element as paramentr and assign 
        this.setCbReg = (element) => {
            this.cbReg = element
        }
        
    }

    componentDidMount(){
        if(this.cbReg){
            this.cbReg.focus()
        }
        // this.inputRef.current.focus()
        // console.log(this.inputRef)
    }

    clickHandler = () => {
        alert(this.inputRef.current.value)
    }
    

    render(){
        return(
            <div>
                <input type="text" ref ={this.inputRef} />
                {/* attach this ref to the input element  */}
                <input type="text" ref ={this.setCbReg} />
                <button onClick = {this.clickHandler}>Click</button>
              
            </div>
            
        );
    }

}

export default RefsDemo