import React from "react";
import BodyContainer from "./Component/body";
import { CoreContextProvider } from "./Context/coreState.context";

import "./styles/App.css";

function App() {
  return (
    <CoreContextProvider>
      <div className="App">
        <BodyContainer />
      </div>
    </CoreContextProvider>
  );
}

export default App;
