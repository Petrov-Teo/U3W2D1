import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavBar from "./Components/MyNavBr";
import Welcome from "./Components/Welcome";
import Main from "./Components/Main";
import Footer from "./Components/Footeer";
import { render } from "@testing-library/react";
import { Component } from "react";

class App extends Component() {
  state = {
    books: "",
  };
  render() {
    return (
      <div className="App">
        <MyNavBar />
        <Welcome />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
