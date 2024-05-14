import { useMemo, useState } from "react"

function Memo(){
    const [count , setCount] = useState(0)

    const expFunction =(val) => {
        console.log("calculating...")
        return val*2;
    }
    const MemoValue = useMemo(()=>{
        return expFunction(count)
    },[count])
    return(
        <>
        <p>Count:{count}</p>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <p>Memorized value = {MemoValue}</p>
        </>
    )
}
export default Memo