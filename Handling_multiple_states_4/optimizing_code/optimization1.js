import React, { useState } from "react";

function App() {

  let [contact, setContact] = useState({
  fName : "",
  lName : "",
  email : ""
  });

  function Contactsetter(event){
    const {name, value} = event.target; //destructuring objects (see your notes)
    setContact( prevValue => {
      if(name === "fName"){
        return {
          fName : value,
          lName : prevValue.lName,
          email : prevValue.email
        };
      }
      else if (name === "lName"){
        return {
          fName : prevValue.fName,
          lName : value,
          email : prevValue.email
        };
      }
      else if (name === "email"){
        return {
          fName : prevValue.fName,
          lName : prevValue.lName,
          email : value
        };
      }
    } )

    }


  return (
    <div className="container">
      <h1>Hello {contact.fName} {contact.lName}</h1>
      <p>{contact.email}</p>
      <form>
        <input onChange={Contactsetter} value={contact.fName} name="fName" placeholder="First Name" />
        <input onChange={Contactsetter} value={contact.lName} name="lName" placeholder="Last Name" />
        <input onChange={Contactsetter} value={contact.email} name="email" placeholder="Email" />
        <button>Submit</button>
      </form>

    </div>
  );
}

export default App;
