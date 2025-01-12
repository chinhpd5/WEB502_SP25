// import './App.css'
import MyComponent from "./components/MyComponent";

function App() {
  const myName: any = "chinhpd5";

  console.log(myName);
  // console.log(123);

  function test(a: number, b: number): void {
    // debugger;
    console.log(a + b);
  }

  test(1, 2);

  test(3, 4);

  return (
    <>
      <MyComponent />
    </>
  );
}

export default App;
