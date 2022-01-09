import React from "react";
import Time from "./Time"
import HighlightIcon from '@material-ui/icons/Highlight';

function Heading() {
  return <header><h1 className="h1"><HighlightIcon />Keeper App<HighlightIcon /></h1><Time /></header>
}

export default Heading;