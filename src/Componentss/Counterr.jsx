import {useState}  from "react";
function Counterr()
{
    const[count,setCount]=useState(1)
    //let increment=()=>
    //{
        //const[count,setCount]=useState(0);
        //let c=Number(document.getElementById("count").textContent)
        //c=c+1
        //document.getElementById("count").textContent=c
       // setCount(count+1)
  //  }
    return(
        <>
        <h1> {count}  </h1>
        <button onClick={()=>setCount(count+1)}>INCREASE</button>
        </>
    )
}
export default Counterr;