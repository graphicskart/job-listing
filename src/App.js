import React, { Component } from "react";
import "./App.css";
import { Jobs } from "./components";
import { Container } from "react-bootstrap";

class App extends Component {
  render() {
    return (
      <Container>
        <Jobs />
      </Container>
    );
  }
}

export default App;
