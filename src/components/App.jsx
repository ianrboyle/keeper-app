import React from "react";
import Heading from "./Heading"
import Note from "./Note"
import Footer from "./Footer"
import notes from "../notes"
import Login from "./Login"
import Hook from "./Hook"
// import Register from "./Register"

var isLoggedIn = false;
var isRegistered = false;

function App() {
  return <div>
    <Heading />
    <Hook />
    {isLoggedIn ? null : <Login isRegistered={isRegistered}/>}
    {notes.map((note) =>  <Note key={note.id} title={note.title} content={note.content.substring(0,75) + "..."}  />
)}
 
<Footer />
</div>
}

export default App;