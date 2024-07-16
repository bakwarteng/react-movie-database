import React from "react";


function Result({ result }) {
  return (
    <div className="result">
      <img src={result.Poster} />
      <h3> {result.Title}</h3>
      console.log(result)
    </div>
  );
}

export default Result;
