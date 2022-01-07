import React from "react";
import Heading from "./Heading"
import Note from "./Note"
import Footer from "./Footer"
import notes from "../notes"
import Login from "./Login"
// import Register from "./Register"

var isLoggedIn = false;
var isRegistered = false;

function App() {
  return <div>
    <Heading />
    
    {isLoggedIn ? null : <Login isRegistered={isRegistered}/>}
    {/* {isRegistered ? <Register /> : <Login />} */}
    {notes.map((note) =>  <Note key={note.id} title={note.title} content={note.content.substring(0,75) + "..."}  />
)}
 
<Footer />
</div>
}

export default App;