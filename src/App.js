import React from "react";
import ReactDOM from "react-dom";
import LocalComponent from "./components/LocalComponent";
import GlobalStyle from "./styles/Globalnject";


const Header = React.lazy(() => import("children/Header"));
const Footer = React.lazy(() => import("children/Footer"));

const App = () => {


  return(
  <div>
      <React.Suspense fallback="Loading Name">
        <Header />
      </React.Suspense>
    <div>
      <h1>HOST 222</h1>
    </div>
    <React.Suspense fallback="Loading Name">
      <Footer/>
    </React.Suspense>
    <LocalComponent />  
    <GlobalStyle />
  </div>
  )
};

ReactDOM.render(<App />, document.getElementById("app"));