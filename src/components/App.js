import React, { useState } from "react";
import Heading from "./Heading";
import Note from "./Note";
import Footer from "./Footer";
import TitleSearchBar from "./TitleSearchBar";
import ContentSearchBar from "./ContentSearchBar";
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

  // function filterNotes(e) {
  //   if (e.target.value === "") {
  //     return notes.map((noteItem, index) => {
  //       return <Note title={noteItem.title} content={noteItem.content} key={index} id={index} delete={deleteNote} />;
  //     });
  //   } else {
  //     const filtered = notes
  //       .filter((note) => {
  //         return note.title.toLowerCase().includes(e.target.value.toLowerCase());
  //       })
  //       .map((noteItem, index) => {
  //         return <Note title={noteItem.title} content={noteItem.content} key={index} id={index} delete={deleteNote} />;
  //       });
  //     setNotes(filtered);
  //     setFilterState(true);
  //   }
  // }
  const renderedNotes = notes
    .filter((note) => {
      if (search.titleSearch === "" && search.contentSearch === "") {
        return note;
      } else if (note.title.includes(search.titleSearch) && note.content.includes(search.contentSearch)) {
        return note;
      }
    })
    .map((noteItem, index) => {
      return <Note title={noteItem.title} content={noteItem.content} key={index} id={index} delete={deleteNote} />;
    });
  return (
    <div>
      <Heading />
      <TitleSearchBar titleSearch={search.titleSearch} handleChange={handleChange} />
      <ContentSearchBar contentSearch={search.contentSearch} handleChange={handleChange} />

      <CreateArea onAdd={addNote} />
      {renderedNotes}
      <Footer />
    </div>
  );
}

export default App;
