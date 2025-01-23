import { useState } from "react"

function Tdl(){


    const[task, setTask]=useState("")
    const[data, setdata]=useState([])
    const[msg, setMsg]=useState("")
    const[pen, setPen]=useState([])
    const click=()=>{
        console.log(task)
        if(task.length==0){console.log("Enter task")
            setMsg("Please enter task")
        }
        else {
            const dd=[...data,task]
            setdata(dd)
            setMsg("")
        }
    }
    
        const clear =(index)=>{
            const er=data.splice(index,1)
            const p=[...er,...pen]
            setPen(p)
            const dd=[...data]
            setdata(dd)
        }
        const restore=(index)=>{
            const er=pen.splice(index,1)
            const p=[...er,...data]
            setdata(p)
            constdd=[...pen]
            setPen(dd)
          
        }
        const dlt=(index)=>{
            const er=pen.splice(index,1)
            const p=[...data]
           setdata(p)
        
        }
        
    



    return(

        <div className="m1">
            
            <div className="h1">
        <h1>My Todo List</h1>
       <div> <input type="text" placeholder="Create a New Todo" value={task} onChange={(e)=>setTask
        (e.target.value)} /> <button onClick={click}>Add</button>
       </div>
       <h2>{msg}</h2>

       <div className="pc">
       <div className="i">
           <h1 className="pt">Pending Todo</h1>
                  {data.map((item,index)=><div className="m"><h3 className="it1">{item}</h3><div className="m2"><button className="up"  onClick={()=>{clear(index)}}>Mark as Completed</button></div></div>)}
            </div>
            <div className="i">
           <h1 className="ct">Completed tasks</h1>
                  {pen.map((item,index)=><div className="n"><h3 className="it2">{item}</h3><div className="m2"><button className="btn"  onClick={()=>{restore(index)}}>Restore</button><button className="dlt" onClick={()=>{dlt(index)}}>Delete</button></div></div>)}
            </div>
        
       </div>
     </div>
     </div>


    )
}
export default Tdl
