import React, { useState } from "react";
import axios from "axios";

const News = ({ news, fetchNews, key }) => {
  return (
    <div>
      <div className="container my-3">
        <button className="btn btn-primary" onClick={fetchNews}>
          fetch news
        </button>
      </div>
      <div className="container">
        <div className="row">
          {news.map((item, key) => {
            return (
              <div className="col-4">
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    src={item.urlToImage}
                    className="card-img-top"
                    alt="..."
                  ></img>
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                    <a href={item.url} className="btn btn-primary">
                      show more
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default News;
