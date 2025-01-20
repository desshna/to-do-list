import { useState } from "react"

function Tdl(){


    const[task, setTask]=useState("")
    const[data, setdata]=useState([])
    const[msg, setMsg]=useState("")
    const click=()=>{
        console.log(task)
       
      
        // setTask("")

        if(task.length==0){console.log("Enter task")
            setMsg("Please enter task")
        }
        else {
            const dd=[...data,task]
            setdata(dd)
            setMsg("")
        }
    }
    const del =(item)=>{

        const sd= data.filter(ite=>ite!=item)
        setdata(sd)
        console.log(sd)
    }

    return(

        <div className="m1">
            
            <div className="h1">
        <h1>My Todo List</h1>
       <div> <input type="text" placeholder="Create a New Todo" value={task} onChange={(e)=>setTask
        (e.target.value)} /> <button onClick={click}>Add</button>
       </div>
       
       <div className="i">
       {data.map((item)=><div className="m"><h3>{item}</h3><div className="m2"><button className="dlt"  onClick={()=>{del(item)}}>Delete</button><button className="up">Update</button><button className="btn">
       Mark as completed</button></div></div>)}
         </div>
         <h2>{msg}</h2>
     </div>
     </div>


    )
}
export default Tdl