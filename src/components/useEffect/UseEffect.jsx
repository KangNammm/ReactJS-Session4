import React, { useEffect, useState } from 'react'

export default function UseEffect() {
  // cách 1: useEffect(callback)
    // +callback sẽ được gọi khi component được gắn vào DOM ( mounted )
    // +callback được gọi khi component được gắn vào DOM
    // +callback sẽ được gọi khi state thay đổi => ít dùng
  // cách 2: useEffect(callback, [])
    // +callback sẽ được gọi khi component được gắn vào DOM ( mounted )
    // +callback chỉ được gọi trong lần đầu tiên component render <=> componentDidMount trong lifecycle
  // cách 3: useEffect(callback, [deps])
    // +callback sẽ được gọi khi component được gắn vào DOM ( mounted )
    // +callback được gọi khi dependency ( có thể là state, props hoặc dữ liệu khác ) thay đổi

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // cách 1
  // useEffect(() => {
  //     // thay đổi tiêu đề trên tab trình duyệt
  //     document.title = name;
  //     console.log("useEffect duoc goi...");
  // });

  // cách 2
  //   useEffect(() => {
  //     // phù hợp cho việc gọi API để hiển thị thông tin
  //     console.log("useEffect o cach 2 duoc goi...");
  //   }, []);

  // cách 3
  useEffect(() => {
    // phù hợp cho việc gọi API để hiển thị thông tin
    console.log("useEffect o cach 3 duoc goi...", name);
  }, [name]);

  useEffect(() => {
    // phù hợp cho việc gọi API để hiển thị thông tin
    console.log("useEffect o cach 3 duoc goi...", email);
  }, [email]); // sử dụng toán === để so sánh

    
    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            name: name,
            email: email,
        };
        console.log(newUser);
    }
    
  return (
    <>
      {console.log("render")}
      <form onSubmit={(e)=> handleSubmit(e)}>
        <input
          type="text"
          placeholder=" Enter username..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder=" Enter email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
              />
              <button type='submit'> Enter</button>
      </form>
    </>
  );
}
