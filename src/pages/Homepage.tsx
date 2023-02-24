import axios from "axios";
import React, { Component } from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";

import movies from "../dummy/movies.json";

interface MoviesState {
  data?: [];
  page: number;
  total_pages: number;
}

export class Homepage extends Component<MoviesState> {
  state = {
    data: [],
    page: 1,
    total_pages: 0,
  };

  async getMovies(page: number) {
    axios
      .get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=${page}`)
      .then((response) => {
        console.log("data: ", response.data.results);
        this.setState({ data: response.data.results });
        this.setState({ total_pages: response.data.total_pages });
      })
      .catch((error) => {
        console.log("error: ", error);
      });
  }

  componentDidMount() {
    this.getMovies(1);
  }

  nextPage() {
    this.setState({ page: this.state.page + 1 });
    this.getMovies(this.state.page);
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 });
    this.getMovies(this.state.page);
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
          <div className="btn-group flex justify-center py-5">
            <button disabled={this.state.page <= 1} className="btn" onClick={() => this.previousPage()}>
              «
            </button>
            <button className="btn">Page {this.state.page}</button>
            <button disabled={this.state.page === this.state.total_pages} className="btn" onClick={() => this.nextPage()}>
              »
            </button>
          </div>
        </>
      </div>
    );
  }
}

export default Homepage;
