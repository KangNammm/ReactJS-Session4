import React, { useContext } from 'react'
import { ThemContext } from './UseContext';  // bước 3
export default function Comp_B() {
    const theme = useContext(ThemContext);  // bước 3
  return (
      <>
          
          <p className={ theme }> Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Molestias laboriosam sunt quasi architecto cumque,
              quisquam ratione repellendus at itaque consequuntur veniam
              tenetur eos expedita dolores aut ipsa aliquam cum corrupti?
          </p>
          
      </>
  )
}
