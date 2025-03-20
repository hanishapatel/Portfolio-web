/* eslint-disable jsx-a11y/alt-text */
import React from "react";

export default function Experience({ value }) {
  return (
    <div className="col-12 col-x-4 col-xl-4 col-xxl-4 text-lg-center mb-4 mb-lg-0">
      <div className="row bg-light p-2 rounded-4">
        <div className="col-6 col-xl-12 col-xxl-12 m-auto">
          <img
            className="card-img"
            src={value.logo}
            style={{ maxWidth: "200px" }}
          />
        </div>
        <div className="col-6 col-xl-12 col-xxl-12 align-content-center p-1">
          <div className="fw-bolder p-1">
            <a className="text-decoration-none" href={value.link} target="_blank" rel="noreferrer">
              {value.employer}
            </a>
          </div>
          <div className="fw-semibold p-1">{value.title}</div>
          <div className="text-muted pb-1">{value.duration}</div>
          <div className="text-muted">{value.location}</div>
        </div>
      </div>
    </div>
  );
}
