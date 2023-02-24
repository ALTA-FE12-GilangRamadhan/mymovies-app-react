import React, { Component } from "react";
import { useNavigate } from "react-router-dom";

import { withRouter } from "../utils/navigation";

interface Movies {
  id: string;
  title: string;
  image: string;
  navigate?: any;
  params?: any;
}

class Card extends Component<Movies> {
  onClickDetail() {
    this.props.navigate(`/movie/${this.props.id}`);
  }

  render() {
    const { id, title, image } = this.props;
    return (
      <div id={id} className="card card-compact w-50 bg-base-100 shadow-xl p-3">
        <figure>
          <img src={`https://image.tmdb.org/t/p/w500${image}`} alt={title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title" onClick={() => this.onClickDetail()}>
            {title}
          </h2>
          <div className="card-actions justify-center">
            <button className="btn btn-primary">Add to favorite</button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Card);
