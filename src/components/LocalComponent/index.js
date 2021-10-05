import React, { useState } from 'react';

function LocalComponent() {
const [counter, setCounter] = useState(0)

  return <div>LOCAL COMPONENTE {counter}
  <button onClick={() => setCounter(counter + 1)}>ClICAR COMPONENTE</button>
  </div>;
}

export default LocalComponent;