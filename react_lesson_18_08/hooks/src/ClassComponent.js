// import React from 'react';
// class ClassComponent extends React.Component{
//     constructor(){
//         super();
//         this.state = {
//             counter:0
//         }
//         this.increase = this.increase.bind(this)

//     }



//     increase(){
//         this.setState({counter: this.state.counter +1})
//     }




//     render(){
//         console.log("class counter", this.state.counter);
//         return(
//             <div className="class">
//                 <h2>
//                     Class Component
//                 </h2>
//                 <p>
//                     Counter : {this.state.counter}
//                 </p>
//                 <button onClick={()=> this.increase()}>Increase</button>
//             </div> 
//         )
//     }
// }

// export default ClassComponent;



// sadelesmemis hali yukarida

import React from "react";
class ClassComponent extends React.Component {
    state = {
        counter: 0,
    };

    componentDidMount() {
        //   console.log("did mount")
    }

    componentDidUpdate() {
        console.log("did update")
    }

    componentWillUnmount() {
        console.log("will unmount")
    }

    increase = () => {
        this.setState({ counter: this.state.counter + 1 })
    }

    render() {
        // console.log("Class Counter:", this.state.counter);
        return ( <
            div className = "class" >
            <
            h2 > Class Component < /h2> <
            p > Counter: { this.state.counter } < /p> <
            button onClick = {
                () => this.increase() } > Increse < /button> <
            /div>
        );
    }
}
export default ClassComponent;