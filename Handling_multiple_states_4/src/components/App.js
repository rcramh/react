import React, { useState } from "react";

function App() {

  let [fName, setFName] = useState("a");
  let [lName, setLName] = useState("b");
  let [email, setEmail] = useState("c");


  function fNameSetter(event){
    const fName = event.target.value;
    setFName(fName);
  }

  function lNameSetter(event){
    const lName = event.target.value;
    setLName(lName);  
  }

  function emailSetter(event){
    const email = event.target.value;
    setEmail(email);  
  }


  return (
    <div className="container">
      <h1>Hello {fName} {lName}</h1>
      <p>{email}</p>
      <form>
        <input onChange={fNameSetter} value={fName} name="fName" placeholder="First Name" />
        <input onChange={lNameSetter} value={lName} name="lName" placeholder="Last Name" />
        <input onChange={emailSetter} value={email} name="email" placeholder="Email" />
        <button>Submit</button>
      </form>

    </div>
  );
}

export default App;
