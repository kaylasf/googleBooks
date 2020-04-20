import React from "react";

function ResultList(props) {
  console.log("this is props" + props)
  return (
   
    <ul className="list-group">
      {props.results.map(result => (
      // console.log(result)
        <li className="list-group-item" key={result.id}>
          <h4>Title: {result.volumeInfo.title}</h4>
          <h5>{result.volumeInfo.subtitle}</h5>
           <p>Page Count: {result.volumeInfo.pageCount}</p>
             <p>{result.volumeInfo.description}</p>
             <h5> {result.volumeInfo.publisher}</h5>
             <p> Published Date: {result.volumeInfo.publishedDate}</p>
        </li>
      ))}
    </ul>
  );
}

export default ResultList;
