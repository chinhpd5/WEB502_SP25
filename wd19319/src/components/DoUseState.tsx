import { useState } from "react";

function DoUseState(){

  const [counter,setCounter] = useState<number>(0);

  const handleTang = ()=>{
    setCounter(counter+1)
  }

  return (
    <>
      <h1>useState</h1>

      <h2>{counter}</h2>
      <button onClick={handleTang}>Tăng</button>
      <button>Giảm</button>
      <button>Reset</button>
    </>
  )
}

export default DoUseState;
