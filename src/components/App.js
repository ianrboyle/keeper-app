import React, { useState } from "react";
import Heading from "./Heading";
import Note from "./Note";
import Footer from "./Footer";

import CreateArea from "./createArea";
// import Register from "./Register"

function App() {
  return (
    <div>
      <Heading />
      <CreateArea />
      <Note />
      <Footer />
    </div>
  );
}

export default App;
