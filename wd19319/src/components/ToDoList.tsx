import { useState } from "react";

function ToDoList(){
  const [text,setText] = useState<string>('')
  const [jobs,setJobs] = useState<string[]>(['Ăn','Ngủ','Code'])

  // console.log(text);

  const handleAdd = () => {
    // thêm phần tử mới vào mảng jobs thông qua setJobs
    setJobs((prev: string[])=>{
      return [
        ...prev, // spread:  phân rã
        text
      ]
    })
    // sau khi thêm xong reset text trong ô input về ""
    setText("")
  }

  return (
    <>
      <h1>Todo list</h1>

      <input 
        type="text" 
        value={text}
        onChange={(e)=>{
          setText(e.target.value)
      }}/>

      <button onClick={handleAdd}>Add</button>

      <ul>
        {
          jobs.map((item: string,index: number)=>{
            return (
              <li key={index}>{index+1}. {item} <button>Xóa</button></li> 
            )
          })
        }
      </ul>


    </>
  )
}

export default ToDoList;
