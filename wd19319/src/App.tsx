// import './App.css'
import MyComponent from './components/MyComponent'

function App() {
    // const myName:string = "chinhpd5";

    // console.log(123);

    function test(a:number, b:number):void{
        // debugger;
        console.log(a+b);
    }
    test(1,2);

  return (
    <>
      <MyComponent/>
    </>
  )
}

export default App
