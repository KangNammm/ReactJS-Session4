import React, { useState } from "react";

export default function Excersice10() {
  const [count, setCount] = useState("");
  const [length, setLenghtText] = useState(0);
  console.log(length);
  // lang nghe su thay doi input
  const handleChange = (event) => {
    setCount(event.target.value);
  };

  const handleClick = () => {
    const countLenght = count.trim().split("");
    setLenghtText(countLenght.length);
  };

  return (
    <>
      <h1>Lenght: {length}</h1>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          id="count"
          onChange={handleChange}
          value={count}
        />
      </div>
      <button onClick={handleClick} type="submit" className="btn btn-primary">
        Count
      </button>
    </>
  );
}
