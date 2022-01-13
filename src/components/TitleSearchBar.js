import React from "react";

function TitleSearchBar(props) {
  return (
    <input
      type="text"
      name="titleSearch"
      value={props.titleSearch}
      onChange={props.handleChange}
      placeholder="Search for a note"
    />
  );
}

export default TitleSearchBar;
