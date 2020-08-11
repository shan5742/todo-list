import React from "react";
import "./App.css";
import Header from "./Header";
import Todos from "./Todos";

function App() {
  return (
    <div className="container">
      <Header />
      <Todos />
    </div>
  );
}

export default App;
