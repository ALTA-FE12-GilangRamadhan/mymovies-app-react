import React, { Component } from "react";
import DetailCard from "../components/DetailCard";
import Navbar from "../components/Navbar";

import movies from "../dummy/movies.json";

export class Detail extends Component {
  movie = movies.find((movie) => movie.id == 634649);
  render() {
    return (
      <>
        <Navbar />
        {}
        <div className="card card-side bg-base-100 shadow-xl">
          <figure>
            <img src="/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">New movie is released!</h2>
            <p>Click the button to watch on Jetflix app.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Watch</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Detail;
