import React from "react";
import PropsExample from "./components/PropsExample"
import PropsMappingExample from "./components/PropsMapping"

function App() {

  const visitedPlaces = ["Portland", "Colorado Springs", "Baltimore", "Fort Walton Beach", "Guatemala City", "London"]
  return( 
    <div>
      <PropsExample name ="Tom" business="MySpace"/>
      <PropsMappingExample visited={visitedPlaces}/>
    </div>
    );
}

export default App;
