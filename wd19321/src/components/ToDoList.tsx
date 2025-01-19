import { useState } from "react";

function ToDoList(){
  const [text,setText] = useState<string>('');
  const [jobs,setJobs] = useState<string[]>(['Ăn','Ngủ','Code'])

  // console.log(text);

  const handleAdd = ()=>{
    console.log(123);
    setJobs((prevJobs: string[])=>{
      return [
        ...prevJobs,// spread
        text
      ]
    })
    setText('')
  }
  
  return (
    <>
      <h1>To do list</h1>

      <input 
        type="text" 
        onChange={
          (e) => {
            // console.log(e.target.value);
            setText(e.target.value);
          }
        }
        value={text}        
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {
          jobs.map((item:string,index:number)=>{
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
