import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";

import "./Meaning.css"

export default function Meaning(props) {
  return (
    <section className="Meaning">
      <h3>{props.data.partOfSpeech}</h3>
      {props.data.definitions.map((definition,index) => {
        return (
          <div key={index}>
            <p>{definition.definition}</p>
            <Example data={definition.example} />
            <Synonyms data={definition.synonyms} />
          </div>
        );
      })}
    </section>);
}