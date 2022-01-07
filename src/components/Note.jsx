import React from "react";

function strike() {
  document.getElementById("root").style.textDecoration = "line-through"
}

function Note(props) {
  return <div className="note"><h1>{props.title}</h1><p>{props.content}</p><button onClick={strike}>Read</button></div>
}

export default Note;