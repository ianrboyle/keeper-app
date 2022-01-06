import React from "react";
import Heading from "./Heading"
import Note from "./Note"
import Footer from "./Footer"
import notes from "../notes"



function App() {
  return <div><Heading />
   {notes.map((note) =>  <Note key={note.id} title={note.title} content={note.content.substring(0,75) + "..."} />
)}
 
<Footer /></div>
}

export default App;