import React, { Component } from "react";

export default class NewsItems extends Component {
  render() {
    let { uurl, title, dis, uuurl } = this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: "18rem" }}>
          <img src={uurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{dis}</p>
            <a href={uuurl} className="btn btn-sm primary">
              Read More....
            </a>
          </div>
        </div>
      </div>
    );
  }
}
