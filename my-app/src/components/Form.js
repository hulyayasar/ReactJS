import React,{Component} from "react";

class Form extends Component{

    constructor(props){
        super(props)

        this.state = {
            username: '',
            comments:'',
            topic: "react"
        }
    }

    handleUsernameChange = (event) => {

        this.setState({
            username: event.target.value
        })

    }

    handleCommentChange = (event) => {
        this.setState({
            comments: event.target.value
        })

    }

    handleTopicChange = (event) => {

        this.setState({
            topic: event.target.value
        })

    }

    handleSubmit = (event) => {
        alert(`username is ${this.state.username}. comment is ${this.state.comments}. topic is ${this.state.topic}` )
        event.preventDefault()
    }

    render(){

        const {username, comments,topic} = this.state

        return (
            <form onSubmit={this.handleSubmit}> 
                <div>
                    <label>Username</label>
                    <input type ='text' value={username} onChange={this.handleUsernameChange} />
               
               </div>

               <div>
                    <label>comments</label>
                    <textarea type ='text' value = {comments} onChange={this.handleCommentChange}></textarea>
               </div>

               <div>
                <label>Topic</label>
                <select value= {topic} onChange={this.handleTopicChange}>
                    <option value= "react">React</option>
                    <option value= "angular">Angular</option>
                    <option value= "vue">Vue</option>
                </select>
               </div>

               <button>Submit</button>

            </form>


            
        );
    }

}

export default Form