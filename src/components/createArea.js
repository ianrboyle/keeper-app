import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }
  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }
  return (
    <div>
      <Zoom in={true}>
        <form class="create-note">
          <input name="title" value={note.title} onChange={handleChange} placeholder="Title" />
          <textarea name="content" value={note.content} onChange={handleChange} placeholder="Take a note..." rows="3" />

          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </form>
      </Zoom>
    </div>
  );
}

export default CreateArea;
