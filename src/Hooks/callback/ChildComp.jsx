
function ChildComp({prop}) {
  return (
    <>
        <button onClick={()=>prop(1)}>By 1</button>
        <button onClick={()=>prop(5)}>By 5</button>
    </>
  )
}

export default ChildComp
