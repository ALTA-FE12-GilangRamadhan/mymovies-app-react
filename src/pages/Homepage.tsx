import axios from "axios";
import React, { Component } from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";

import movies from "../dummy/movies.json";

interface MoviesState {
  data?: [];
}

export class Homepage extends Component<MoviesState> {
  state = {
    data: [],
  };

  async getMovies() {
    axios
      .get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=1`)
      .then((response) => {
        console.log("data: ", response.data.results);
        this.setState({ data: response.data.results });
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  }

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { data } = this.state;

    return (
      <div>
        <>
          <Navbar />
          <h1 className="text-center text-3xl py-10">Now Playing Movies</h1>
          <div className="grid grid-cols-4 gap-3 p-3">
            {data.map((item: any, index) => {
              return <Card key={index} id={item.id} title={item.original_title} image={item.poster_path} />;
            })}
          </div>
        </>
      </div>
    );
  }
}

export default Homepage;
