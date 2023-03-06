import React, { useState } from "react";

const Greeting = () => {
  const [change, setChange] = useState(false);

  return (
    <div>
      <h2>Hello world</h2>
      {!change && <p>Nima gap</p>}
      {change && <p>Ozgardi</p>}
      <button onClick={() => setChange(true)}>change</button>
    </div>
  );
};

export default Greeting;
