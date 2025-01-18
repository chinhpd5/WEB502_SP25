import { useState } from "react";

function MyUseState(){

  const [counter,setCounter] = useState<number>(10)

  const handleIncrease = () =>{
    setCounter(counter+1)
  }

  return (
    <>
      <h1>UseState</h1>
      <h1>{counter}</h1>
      <button onClick={handleIncrease}>Tăng</button>
      <button>Giảm</button>
      <button>Reset</button>
    </>
  )
}

export default MyUseState;
