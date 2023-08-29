import React, { createContext, useState } from 'react'
import Comp_A from './Comp_A'
// comp_a => comp_b => comp_c
// t

  // khai báo context ở comp cha và export ra bên ngoài để sử dụng
export const ThemContext = createContext();  // bước 1
  
export default function UseContext() {
  const [theme, setTheme] = useState("purple");



  const handleChangeTheme = () => {
    setTheme(theme === "purple" ? "dark" : "purple");
  };

  return (
    <>
      <ThemContext.Provider value={theme}>  // bước 2
        <button onClick={() => handleChangeTheme()}>Change theme</button>
        <Comp_A />
      </ThemContext.Provider>
    </>
  );
}
