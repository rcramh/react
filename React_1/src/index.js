import React from "react";
import ReactDOM from "react-dom";

let name = "rahul"

const date = new Date();
const year = date.getFullYear();




ReactDOM.render(
    <div>
     <h1>hello ji {name} </h1>
     <p>rj {year}</p>
     </div>
    ,
     document.getElementById("root")
     ); 