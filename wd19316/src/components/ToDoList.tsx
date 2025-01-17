import { useState } from "react";

function ToDoList(){
  const [text,setText] = useState<string>('')
  const [jobs,setJobs] = useState<string[]>(['Ăn','Code','Ngủ'])

  // console.log(text);

  const handleAdd = () =>{
    if(text){
      setJobs((prev: string[])=>{
        return [
          ...prev, // spread: phân rã
          text
        ]
      })

      setText('')
    }    
  }

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
      <button onClick={handleAdd}>Add</button>

      <ul>
        {jobs.map((item: string,index: number)=>{
          return (
            <li key={index}>
              {index+1}. {item} 
              <button>Xóa</button>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default ToDoList;