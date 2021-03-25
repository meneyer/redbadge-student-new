import React from "react";
import FunctionalClickCounter from "./components/FunctionalClickCounter";
import ClassClickCounter from "./components/ClassClickCounter"

function App() {
  return (
    <div>
      <FunctionalClickCounter initialValue={6} />
      <FunctionalClickCounter initialValue={10} />
      <FunctionalClickCounter initialValue={4} />
      <br />
      <ClassClickCounter initialValue={8}/>
    </div>
  );
}

export default App;