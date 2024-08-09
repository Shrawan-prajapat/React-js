import { Component } from "react";
import User from "./User";

class Counter extends Component {
    constructor() {
        super();
        this.state = {
            number: 0,
            users: [
                {
                    name: 'jay',
                    phone: 12355
                },
                {
                    name: 'ajay',
                    phone: 123556
                }
            ]
        }
    }
    plus(){
        this.setState({number: this.state.number + 1})
    }
    minus(){
        this.setState({number: this.state.number - 1})
    }
    reset(){
        this.setState({number: this.state.number=0})
    }
    square(){
        this.setState({number: this.state.number * this.state.number})
    }
    render() {
        return (
            <div align="center">
                <h1>Name :- {this.state.number}</h1>
                <button onClick={() =>  this.plus()}>+</button>
                {
                    this.state.number==0? <button disabled onClick={() =>  this.minus()}>-</button>: <button onClick={() =>  this.minus()}>-</button>
                }
                  {
                    this.state.number==0? <button disabled onClick={() =>  this.reset()}>Reset</button>: <button onClick={() =>  this.reset()}>Reset</button>
                }
              
                <button onClick={() =>  this.square()}>square</button>
                <User users={this.state.users}/>
            </div>
        )
    }
}

export default Counter;