import React from "react";

import "./Phonetics.css";

export default function Phonetics(props) {
  
  return <div className="Phonetics">{props.data.text} <a href={props.data.audio} target="_blank" rel="noreferrer noopener">listen</a></div>;
}