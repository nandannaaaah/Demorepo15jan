import {useEffect, useState}  from "react";
function Counterr()
{
    const[count,setCount]=useState(0)
    useEffect(()=>{ console.log("score has been changed");},[count])
   
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
        <h2>SCOREBOARD:{count} </h2>
<button onClick={()=>setCount(count+10)}>GOAL</button>
<button onClick={()=>setCount(count-5)}>PENALTY</button>
<button onClick={()=>setCount(0)}>RESET</button>
        </>
    )
}
export default Counterr;


