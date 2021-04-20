import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Images from "./Images";

import "./Dictionary.css";

export default function Dictionary() {
  const [keyword,setKeyword] = useState(null);
  const [data,setData] = useState(null);
  const [photos,setPhotos] = useState(null);
  const [ready,setReady] = useState(false);

  function handleResponse(response) {
    setData(response.data[0]);
    setReady(true);
  }

  function handleImageResponse(response) {
    setPhotos(response.data.photos);
  }

  function handleSearch(event) {
    event.preventDefault();
    
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    // Dictionary API at https://dicitonaryapi.dev/

    axios.get(apiUrl).then(handleResponse);

    let apiKeyPexels = "563492ad6f9170000100000163a768b52c5c467aa0f26bfcffd11434";
    let apiUrlPexels = `https://api.pexels.com/v1/search?query=${keyword}&per_page=12`;
    //Photo API via https://www.pexels.com/api/documentation/
    let header = { Authorization : `Bearer ${apiKeyPexels}` };

    axios.get(apiUrlPexels, { headers: header }).then(handleImageResponse);
  }

  function handleWordChange(event) {
    event.preventDefault();
    setKeyword(event.target.value);
  }
  
  if (ready) {
  return (
    <div className="Dictionary">
      <section><div className="App-header">
        Dictionary
      </div>
      <form className="search-form" onSubmit={handleSearch}>
        <input type="search" placeholder="Enter a word..." onChange={handleWordChange} className="search-input" />
        <input type="submit" value="Search" className="search-button" />
      </form></section>
      <Results data={data} />
      <Images data={photos} />
    </div>
  );} else {
    return (
    <div className="Dictionary">
      <section><div className="App-header">
        Dictionary
      </div>
      <form className="search-form" onSubmit={handleSearch}>
        <input type="search" placeholder="Enter a word..." onChange={handleWordChange} className="search-input" />
        <input type="submit" value="Search" className="search-button" />
      </form></section>
      <section className="try-me">Hello :) Want to look up a word? <br />
      Try entering one into the search box above.</section>
    </div>
    );

  }
}