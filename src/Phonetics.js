import React from "react";

export default function Phonetics(props) {
  
  return <div className="Phonetics"><a href={props.data.audio} target="_blank" rel="noreferrer noopener">{props.data.text}</a></div>;
}