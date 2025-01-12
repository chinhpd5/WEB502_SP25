import MyComponent from "./components/MyComponent"

function App() {
  const myName: string = "chinhpd5"

  console.log(myName);

  function sum(a:number, b:number):void{
    // debugger;
    console.log(a+b);
  }

  sum(2,3);
  

  return (
    <>
      <MyComponent/>
    </>
  )
}

export default App
