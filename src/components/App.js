import React, { useState } from "react";
import Heading from "./Heading";
import Note from "./Note";
import Footer from "./Footer";
import SearchBar from "./SearchBar";
import CreateArea from "./createArea";
// import Register from "./Register"

function App() {
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState({
    titleSearch: "",
    contentSearch: "",
  });
  //thie "note" is being passed over from createArea component
  function addNote(note) {
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
    console.log(notes);
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      });
    });
  }
  function handleChange(e) {
    const { name, value } = e.target;
    console.log(e.target.value);
    setSearch((prevSearch) => {
      return {
        ...prevSearch,
        [name]: value,
      };
    });
  }

  return (
    <div>
      <Heading />
      <SearchBar titleSearch={search.titleSearch} handleChange={handleChange} />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return <Note title={noteItem.title} content={noteItem.content} key={index} id={index} delete={deleteNote} />;
      })}

      <Footer />
    </div>
  );
}

export default App;
