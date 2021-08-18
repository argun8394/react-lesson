import { useState } from 'react';
import FunctionalComponent from './FunctionalComponent';
import ClassComponent from './ClassComponent';

function App() {
    const [isVisible, setVisible] = useState(true)

    return ( <
        div className = "App" >
        <
        button onClick = {
            () => setVisible(!isVisible) } > Toggle < /button> <
        ClassComponent / > { /* {isVisible && <ClassComponent/> } */ } { /* <FunctionalComponent/> */ } { isVisible ? < FunctionalComponent / > : null } <
        /div>
    );
}

export default App;