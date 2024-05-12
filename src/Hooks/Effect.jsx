import { useEffect, useState } from "react";

function Effect(){
    const [sec , setsec] = useState(0);
    useEffect(()=>{
        const timmer = setInterval(()=>{
            setsec(prev=>prev+1)
        },1000)

        return () =>clearInterval(timmer)
    },[])
    return(
        <>
            <div>
                {sec}
            </div>
        </>
    )
}
export default Effect;