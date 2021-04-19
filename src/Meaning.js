import React from "react";

export default function Meaning(props) {
  console.log(props);
  return (
    <div className="Meaning">
      <h3>{props.data.partOfSpeech}</h3>
      {props.data.definitions.map((definition,index) => {
        return (
          <div key={index}>
            <p>{definition.definition}</p>
            <p><em>{definition.example}</em></p>
          </div>
        );
      })}
    </div>);
}