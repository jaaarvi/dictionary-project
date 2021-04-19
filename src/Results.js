import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";

import "./Results.css";

export default function Results(props) {
  if (props.data) {
    return (
      <div className="Results">
        <h2>{props.data.word}</h2>
        <h4>{props.data.phonetics.map((phonetics,index) => {
          return <div key={index}><Phonetics data={phonetics} /></div>;
        })}</h4>
        {props.data.meanings.map((meaning,index) => { 
          return (<div key={index}><Meaning data={meaning} /></div>);})}
      </div>);
  } else {
    return null;
}}