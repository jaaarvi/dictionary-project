import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword,setKeyword] = useState(null);

  function handleSearch(event) {
    event.preventDefault();
    alert(keyword);
  }

  function handleWordChange(event) {
    event.preventDefault();
    setKeyword(event.target.value);
  }

  return <div className="Dictionary">
    <form onSubmit={handleSearch}><input type="search" placeholder="Enter a word..." onChange={handleWordChange} /><input type="submit" value="Search" /></form>
  </div>
}