import React, { useState} from 'react'

const totals = [100, 200, 300, 400]

export default function UseState_Comp() {
  // phạm vi viết code java
    const [count, setCount] = useState(() => {
        console.log("initial running...");
        // đối với initialState là 1 callback thì nó sẽ lấy giá trị đuọc return từ callback là initialState
        const totalCount = totals.reduce((prevValue, currentValue) => {
            return prevValue + currentValue;
        }, 0);

        return totalCount;
    });
    console.log("re-render");
    // hàm xử lí tăng
    const handleCount = () => {
        // cập nhật giá trị của state
        setCount(count + 1);
    }
    return (
        <>
            
        <h1>Count: {count}</h1>
            <button onClick={handleCount}>Count</button>
            
        </>
    )
    
}
