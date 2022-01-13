import React from "react";

function ContentSearchBar(props) {
  return (
    <input
      type="text"
      name="contentSearch"
      value={props.contentSearch}
      onChange={props.handleChange}
      placeholder="Search for a content"
    />
  );
}

export default ContentSearchBar;
