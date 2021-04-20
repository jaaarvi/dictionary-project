import React from "react";

import "./Example.css";

export default function Example(props) {
  if (props.data) {
    return <div className="Example">&quot;{props.data}.&quot;</div>;
  } else {
    return null;
  }
}