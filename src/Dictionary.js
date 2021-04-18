import React, { useState } from "react";
import axios from "axios";

import "./Dictionary.css";

export default function Dictionary() {
  const [keyword,setKeyword] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
  }

  function handleSearch(event) {
    event.preventDefault();
    
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    // Dictionary API at https://dicitonaryapi.dev/

    axios.get(apiUrl).then(handleResponse);
  }

  function handleWordChange(event) {
    event.preventDefault();
    setKeyword(event.target.value);
  }

  return <div className="Dictionary">
    <form onSubmit={handleSearch}><input type="search" placeholder="Enter a word..." onChange={handleWordChange} /><input type="submit" value="Search" /></form>
  </div>
}