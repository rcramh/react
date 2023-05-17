import React, { useState } from "react";

function App() {

  let [contact, setContact] = useState({
  fName : "",
  lName : "",
  email : ""
  });

  function Contactsetter(event){
    const {name, value} = event.target; //destructuring objects (see your notes)
    setContact(prevValue => {
      return {
        ...prevValue,
        [name] : value    //name will be lname, fname, email, need to put name in [] compulsury
        };
    });

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
