import { useState } from "react";

function ToDoList(){
  const [text,setText] = useState<string>('chinhpd5')

  console.log(text);
  

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
    </>
  )
}

export default ToDoList;
