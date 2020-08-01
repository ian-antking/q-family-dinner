import React from "react";
import getContent from "../services/get-content";

function App() {

  const Test = async () => {
    const content = await getContent();
    console.log(content);
  };

  Test();

  return (
    <>
      <header>
        <p>Queer Family Tea</p>
      </header>
    </>
  );
}

export default App;
