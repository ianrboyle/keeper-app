import React, { useState } from "react";
import Heading from "./Heading";
import Note from "./Note";
import Footer from "./Footer";

import CreateArea from "./createArea";
// import Register from "./Register"

function App() {
  const [notes, setNotes] = useState([]);

  //thie "note" is being passed over from createArea component
  function addNote(note) {
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
    console.log(note);
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Heading />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return <Note title={noteItem.title} content={noteItem.content} key={index} id={index} delete={deleteNote} />;
      })}

      <Footer />
    </div>
  );
}

export default App;
