import React, { useEffect, useRef, useState } from 'react'

function Ref() {
    // const myref = useRef(null)
    // const handleFoucus = ()=>{
    //     myref.current.focus()
    // }
    //example2
    const [value , setValue] = useState('');
    const prevVal = useRef('')
    useEffect(()=>{
        prevVal.current = value

    },[value])
  return (
    // <div>
    //   <input type='text' ref={myref}/>
    //   <button onClick={handleFoucus}>Foucus</button>
    // </div>
    <>
        {/*Example 2 storing previous value */}
        <input type='text' value={value} onChange={e=>setValue(e.target.value)}/>
        <p>Current Value : {value}</p>
        <p>previous Value  :{prevVal.current}</p>
    </>
  )
}

export default Ref
