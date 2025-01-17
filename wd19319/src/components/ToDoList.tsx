import { useState } from "react";

function ToDoList(){
  const [text,setText] = useState<string>('')
  const [jobs,setJobs] = useState<string[]>(['Ăn','Ngủ','Code'])

  console.log(text);

  return (
    <>
      <h1>Todo list</h1>

      <input 
        type="text" 
        value={text}
        onChange={(e)=>{
          setText(e.target.value)
      }}/>

      <button>Add</button>

      <ul>
        {
          jobs.map((item: string,index: number)=>{
            return (
              <li key={index}>{index+1}. {item}</li>
            )
          })
        }
      </ul>


    </>
  )
}

export default ToDoList;
