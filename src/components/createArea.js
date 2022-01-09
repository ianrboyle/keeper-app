import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [isExpanded, showCard] = useState(false);

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

  function handleClick() {
    showCard(!isExpanded);
    console.log(isExpanded);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && <input name="title" value={note.title} onChange={handleChange} placeholder="Title" />}
        {isExpanded ? (
          <textarea
            onClick={handleClick}
            name="content"
            value={note.content}
            onChange={handleChange}
            placeholder="Take a note..."
            rows="3"
          />
        ) : (
          <textarea
            onClick={handleClick}
            name="content"
            value={note.content}
            onChange={handleChange}
            placeholder="Take a note..."
            rows="1"
          />
        )}

        {isExpanded && (
          <Zoom in={true}>
            <Fab onClick={submitNote}>
              <AddIcon />
            </Fab>
          </Zoom>
        )}
      </form>
    </div>
  );
}

export default CreateArea;
