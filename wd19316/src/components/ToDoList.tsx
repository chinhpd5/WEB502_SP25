import { useState } from "react";

function ToDoList(){
  const [text,setText] = useState<string>('')
  const [jobs,setJobs] = useState<string[]>(['Ăn','Code','Ngủ'])

  console.log(text);

  return (
    <>
      <h1>To do list</h1>
      <input 
        type="text"
        onChange={
          (e) => {
            setText(e.target.value);
          }
        }
        value={text}
      />
      <button>Add</button>

      <ul>
        {jobs.map((item: string,index: number)=>{
          return (
            <li key={index}>{index+1}. {item}</li>
          )
        })}
      </ul>
    </>
  )
}

export default ToDoList;