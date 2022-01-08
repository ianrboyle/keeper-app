import React, {useState} from "react";






function Note(props) {
  const [isMousedOver, setMouseOver] = useState(false)

  function handleMouseOver(note){
    setMouseOver(true)
  }
  return <div onMouseOver={handleMouseOver} style={{backgroundColor: isMousedOver ? "lightcyan" : "white"}} className="note"><h1>{props.title}</h1><p>{props.content}</p>

  </div>
}

export default Note;