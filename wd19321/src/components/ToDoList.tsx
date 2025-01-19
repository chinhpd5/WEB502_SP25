import { useState } from "react";

function ToDoList(){
  const [text,setText] = useState<string>('');
  const [jobs,setJobs] = useState<string[]>(['Ăn','Ngủ','Code'])

  // console.log(text);

  const handleAdd = ()=>{
    // console.log(123);
    setJobs((prevJobs: string[])=>{
      return [
        ...prevJobs,// spread
        text
      ]
    })

    // setJobs((prevJobs:string[]) => [...prevJobs,text])

    setText('')
  }
  
  const handleDelete = (indexDelete: number)=>{
    // console.log(index);
    setJobs((prevJobs: string[])=>{
      const newJobs = prevJobs.filter((item:string,index: number)=>{
        return index != indexDelete
      })

      return newJobs;
    })

    // setJobs(
    //   (preJobs: string[]) => 
    //     preJobs.filter(
    //       (item:string,index:number) => index != indexDelete
    //     )
    // )
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
              <li key={index}>
                {index+1}. {item} 
                <button onClick={()=>{handleDelete(index)}}>Delete</button>
              </li>
            )
          })
        }
      </ul>
    </>
  )
}

export default ToDoList;
