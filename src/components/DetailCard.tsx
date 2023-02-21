import React, { Component } from "react";

interface Movies {
  id: string;
  title: string;
  image: string;
  description: string;
  release: string;
}

export class DetailCard extends Component<Movies> {
  render() {
    const { id, title, image, description, release } = this.props;
    return (
      <>
        <div id={id} className="card card-side bg-base-100 shadow-xl">
          <figure>
            <img src={image} alt="Movie" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>{description}</p>
            <p>Release Date: {release}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Watch</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default DetailCard;
