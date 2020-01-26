import React, { useEffect, useState } from "react";
import axios from "axios";

export default function CharContainer(props) {
  const [chars, setChars] = useState([]);

  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people`)
      .then(res => setChars(res.data.results))
      .catch(err => console.log("i am error", err));
  }, []);

  console.log("im chars", chars);

  return (
    <div className="container">
    {chars.map((item,index,array) => (
        <div className="card">
        <h1>{item.name}</h1>
        <p>height:{item.height}</p>
        <p>mass: {item.mass}</p>
        </div>
    ))}
     
    </div>
  );
}
