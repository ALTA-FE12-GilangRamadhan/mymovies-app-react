import React, { Component } from "react";

interface Movies {
  id: string;
  title: string;
  image: string;
}

export class Card extends Component<Movies> {
  render() {
    const { id, title, image } = this.props;
    return (
      <div id={id} className="card card-compact w-50 bg-base-100 shadow-xl p-3">
        <figure>
          <img src={image} alt={title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <div className="card-actions justify-center">
            <button className="btn btn-primary">Add to favorite</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
