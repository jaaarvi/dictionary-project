import React from "react";
import "./Images.css";

export default function Images(props) {
  if (props.data) {
    console.log(props.data);
    return (
      <section className="Images">
        <div className="row">
          {props.data.map((photo, index) => {
            return (
              <div className="col-4" key={index} >
                <a href={photo.src.original} target="_blank" rel="noreferrer">
                  <img src={photo.src.portrait} alt="related to Dictionary search result"/>
                </a>
              </div>
            );
          })}
          <div className="photo-attribution"><a href="https://www.pexels.com">Photos provided by Pexels</a></div>
        </div>
      </section>
    );
  } else {
    return null;
  }
}