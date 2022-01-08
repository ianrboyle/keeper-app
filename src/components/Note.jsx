import React, {useState} from "react";






function Note(props) {
  const [isMousedOver, setMouseOver] = useState(false)

  function handleMouseOver(){
    setMouseOver(true)
  }

  function handleMouseOut() {
    setMouseOver(false)
  }
  return <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} style={{backgroundColor: isMousedOver ? "lightcyan" : "white"}} className="note"><h1>{props.title}</h1><p>{props.content}</p>

  </div>
}

export default Note;