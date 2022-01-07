import React from "react";






function Note(props) {


// function unStrike() {
//   strikeThrough(isRead === false)
//   console.log(isRead)
// }


  return <div className="note"><h1>{props.title}</h1><p>{props.content}</p></div>
}

export default Note;