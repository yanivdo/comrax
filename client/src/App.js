import React from "react";
import "./App.css";
import SearchSection from "./components/SearchSection";

function App(){
  return(
    <div className="bodySite">
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
      integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
      crossOrigin="anonymous"
    />
    <div className="wrapper">
       <SearchSection />
    </div>
  </div>
  );
}

export default App;
