import React, { useState } from "react";

function Hook() {
  const state = useState(123);

  return (
    <div>
      <h1>{state[0]}</h1>
      <button>Increase</button>
    </div>
  );
}

export default Hook;
