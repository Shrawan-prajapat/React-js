import { Component } from "react";
import './index.css';

class State extends Component {
    constructor() {
        super();
        this.state = {
            no: 0,


        }
    }
    increament() {
        this.setState({ no: this.state.no + 1 })
    }
    decrement() {
        this.setState({ no: this.state.no - 1 })
    }
    reset() {
        this.setState({ no: this.state.no = 0 })
    }


    render() {
        return (

            <div className="main" align="center">
                <div className="counter-container">
                    <h1>Counter app</h1>
                    <div className="d-flex">
                        <button onClick={() => this.increament()}>+</button>
                        <p>{this.state.no}</p>
                        {
                            this.state.no == 0 ? <button disabled onClick={() => this.decrement()}>-</button> : <button onClick={() => this.decrement()}>-</button>
                        }
                        
                    </div>
                    {
                            this.state.no == 0 ? <button disabled onClick={() => this.reset()}>reset</button> : <button onClick={() => this.reset()}>reset</button>
                        }
                </div>
            </div>


        )
    }
}
export default State