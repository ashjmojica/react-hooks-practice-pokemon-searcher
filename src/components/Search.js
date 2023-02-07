import React from "react";

function Search({handleChange, searchTerm}) {
  function handleChange(event) {
    onChange(event.target.value);
  }

  
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input onChange={handleChange} value={searchTerm} className="prompt" />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
