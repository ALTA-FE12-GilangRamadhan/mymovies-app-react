import React, { Component } from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";

import movies from "../dummy/movies.json";

export class Homepage extends Component {
  render() {
    return (
      <div>
        <>
          <Navbar />
          <h1 className="text-center text-3xl py-10">Now Playing Movies</h1>
          <div className="grid grid-cols-4 gap-3 p-3">
            {movies.map((item: any) => {
              return <Card id={item.id} title={item.original_title} image={item.poster_path} />;
            })}
          </div>
        </>
      </div>
    );
  }
}

export default Homepage;
