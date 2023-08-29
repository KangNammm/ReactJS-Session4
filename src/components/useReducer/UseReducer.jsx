import React, { useReducer, useState } from 'react'
// useState
// + khai báo giá trị khởi tạo
// + bắt sự kiện tăng giảm và xử lí

// useReducer
// + khai báo giá trị khởi tạo
// + bắt sự kiện tăng giảm và xử lí
// + tạo reducer để xử lí logic
// + truyền dispath (sự kiện onclick)


// bước 1: khai báo giá trị khởi tạo
const initialValue = 0;

// bước 2: tạo các hành động
const UP_ACTION = "up";
const DOWN_ACTION = "down";

export default function UseReducer() {
    // const [count, setCount] = useState(0);
    
    // bước 3: tạo hàm reducer
    /**
     * hàm reducer
     * @param {*} state state hiện tại
     * @param {*} action hành động
     */
    const reducer = (state, action) => {
        switch (action) {
          case UP_ACTION:
            return state + 1;
          case DOWN_ACTION:
            return state - 1;
            default:
                return state;
        }
    }

  // Increase
//     const handleIncrease = () => {
//         setCount(count + 1);
//   };

  // Decrease
//     const handleDecrease = () => {
//         setCount(count - 1);
//   };

    // bước 4: gọi ra useReducer
    const [count, dispatch] = useReducer(reducer, initialValue);
    
  return (
    <>
      <h3>Count: {count}</h3>
      <div>
        <button onClick={() => dispatch(UP_ACTION)}>Increase</button>
        <button onClick={() => dispatch(DOWN_ACTION)}>Decrease</button>
      </div>
    </>
  );
}
