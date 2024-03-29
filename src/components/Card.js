import React, { Component } from "react";

const Card = (props) => {
  let { title, description, image, id, newsUrl } = props;
  return (
    <div>
      <div className="card">
        <img
          src={image ? image : "ImageNotFound.png"}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={newsUrl} className="btn btn-primary">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
