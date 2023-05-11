import React, { useState } from "react";

function App(){
    let [currtime, setCurrTime] = useState("");

    const getCurrentTime = () => {
        let time = new Date().toLocaleTimeString();
        console.log(time); 
        setCurrTime(time); 
    }

    return (
    <div className="container">
        <h1>{currtime} </h1>
        <button onClick={getCurrentTime}> Get Time </button>
    </div>
    );
}

export default App;



{/* <div className="container">
      <h1>{time}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div> */}