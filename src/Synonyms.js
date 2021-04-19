import React from "react";

import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.data) {
    return (
      <ul className="Synonyms">
        {props.data.map((synonym,index) => {
          return (<li key={index}>{synonym}</li>);
        })}
      </ul>
    );
  } else {
    return null;
  }
}