import { Component } from "react";

class Counter extends Component{
    constructor(){
        super();
        this.state={
            name: "Krish",
            phone: 12345
        }
    }
    ChangeName(){
        this.setState({name: "Arya"});
    }
    render(){
        return(
           <div>
             <h1>{this.state.name}</h1>
             <button onClick={() => {this.ChangeName}}>Click</button>
           </div>
        )
    }
}
export default Counter;