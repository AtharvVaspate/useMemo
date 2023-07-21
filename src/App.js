import "./App.css";
import React, { useMemo, useState } from "react";

function App() {
  const [num1, num1handler] = useState(0);
  const [num2, num2Handler] = useState(0);

  const oddeven = useMemo(() => {
    for (let i = 0; i < 10000; i++) {
      console.log("hi");
    }
    console.log("works for +5 also");
    return num1 % 2 === 0;
  }, [num1]);

  function addOne() {
    num1handler(num1 + 1);
  }
  function addTwo() {
    num2Handler(num2 + 5);
  }

  // function evenodd() {
  //   for (let i = 0; i < 10000; i++) {
  //     console.log("hi");
  //   }
  //   console.log("works for +5 also");
  //   return num1 % 2 === 0;
  // }

  return (
    <div className="App">
      <div>hello</div>
      <button onClick={addOne}>{num1}</button>
      <span> {oddeven ? "Even " : "odd"} </span>
      <button onClick={addTwo}>{num2}</button>
    </div>
  );
}

export default App;
