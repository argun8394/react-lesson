import React, { Component } from 'react'
import "./CounterStyle.css";

export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Ali",
            count: 0,
        };
        console.log("constructor");
    };
    static getDerivedFromProps(props, state) {
        console.log("getDerivedFromProps", state);
        return null;
    }

    componentDidMountMount = () => {
        console.log("component mounted!")
        console.log("================================")
    };
    render() {
        console.log("render")
        return (
            <div className="container">
                <p>Counter : </p>
                <button>ARTTIR</button>
                <button>AZALT</button>
            </div>
        )
    }
}
