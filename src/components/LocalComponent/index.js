import React, { useState } from 'react';
const Footer = React.lazy(() => import("children/Footer"));

function LocalComponent() {
const [counter, setCounter] = useState(0)

  return <div>LOCAL COMPONENTE {counter}
  <button onClick={() => setCounter(counter + 1)}>ClICAR COMPONENTE</button>

  <React.Suspense fallback="Loading Name">
      <Footer counterValue={counter} />
    </React.Suspense>
  </div>;
}

export default LocalComponent;