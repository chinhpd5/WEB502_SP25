import { useState } from "react";

function ToDoList(){
  const [text,setText] = useState<string>('')

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
    </>
  )
}

export default ToDoList;
