import React, { Component } from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Detail from "./pages/Detail";
import Homepage from "./pages/Homepage";

export class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/movie/:id_movie" element={<Detail />} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
