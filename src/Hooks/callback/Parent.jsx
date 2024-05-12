import { useCallback, useState } from "react"
import ChildComp from "./ChildComp"

function Parent() {
    const [val,Setval] = useState(0)
    const inc = useCallback((count)=>{
        Setval(prev => prev+count)
    },[])
  return (
    <div>
        <h1>Number: {val}</h1>
        <ChildComp prop= {inc}/>
    </div>
  )
}

export default Parent
