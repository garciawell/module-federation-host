import React from "react";
import ReactDOM from "react-dom";
import GlobalStyle from "./styles/Globalnject";


const Header = React.lazy(() => import("children/Header"));
const Footer = React.lazy(() => import("children/Footer"));

const App = () => (
  <div>
      <React.Suspense fallback="Loading Name">
        <Header />
      </React.Suspense>
    <div>
      <h1>HOST APP 1</h1>
    </div>
    <React.Suspense fallback="Loading Name">
      <Footer/>
    </React.Suspense>
    <GlobalStyle />
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));