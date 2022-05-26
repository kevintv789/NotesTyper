import React from "react";
import "./App.css";
import HomeContainer from "../home/home.container";

const App = () => {
  const Header = () => {
    return <h1 className="header">Notes Typer</h1>;
  };
  return (
    <div className="App">
      <Header />
      <HomeContainer />
    </div>
  );
};

export default App;
