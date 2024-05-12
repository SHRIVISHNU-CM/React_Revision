import { useState } from "react";

function State(){
    // const [count ,setCount ] = useState(0)
    const [display , SetDisplay] = useState(true)
    const [val, setVal ] = useState("This is react.js");

    return(
        <>  {/* counter example*/ }
            {/* <h1>{count}</h1>
            <button onClick={()=>setCount(count+1)}>Click Me</button> */}

            {/** toggle using useState */}
            {display && <h1>{val}</h1>}
            <button onClick={()=>SetDisplay(prev=>!prev)}>Toggle</button>
        </>
    )
}

export default State;