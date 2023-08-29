import React, { useState } from 'react'

export default function Excersice9() {
    const [click, setClick] = useState(0);
    const handleClick = () => {
        setClick(click + 1);
  }
  return (
      <>
          <h1>Click: {click}</h1>
        <button onClick={handleClick}>Click</button>
      </>
  )
}
