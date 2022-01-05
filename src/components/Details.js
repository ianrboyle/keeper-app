import React from "react";

function Details(props) {
  return (
    <div className="bottom">
      <p className="info">{props.phone}</p>
      <p className="info">{props.email}</p>
    </div>
  );
}

export default Details;
