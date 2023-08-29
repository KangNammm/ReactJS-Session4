import React, { useRef, useState } from "react";

export default function Excersice_Todo() {
  // lấy dữ liệu từ local về
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState(() => {
    const jobLocal = JSON.parse(localStorage.getItem("jobs")) || [];
    return jobLocal;
  });

  const todoRef = useRef(null);

  const handleChange = (event) => {
    setTodo(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Tạo biến lưu trữ danh sách công việc
    const newTodo = [...todos, todo];
    // Cập nhật lại state cảu mảng todo đẻ nó render dữ liệu ngoài giao diện
    setTodos(newTodo);

    // Lưu dữ liệu lên local
    localStorage.setItem("jobs", JSON.stringify(newTodo));
    // clear giá trị cũ trong ô input
    setTodo("");

    // focus vào ô input khi thêm hàm thành công
    todoRef.current.focus();
  };

  // hàm xóa
  const handleDelete = (index) => {
    // lọc ra danh sach các công việc có index khác với index cần xóa
    const newTodo = todos.filter((value, i) => i !== index);
    localStorage.setItem("jobs", JSON.stringify(newTodo));
    setTodos(newTodo);
  };

  return (
    <>
      <div>
        <ul className="list-group">
          {todos.map((todo, i) => (
            <li key={i} className="list-group-item d-flex align-center justify-content-between">
              {todo}
              {
                <button
                  type="button"
                  className="btn btn-outline-danger"
                  onClick={() => handleDelete(i)}
                >
                  Xóa
                </button>
              }
            </li>
          ))}
        </ul>
      </div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="mb-3">
          <input
            ref={todoRef}
            type="text"
            className="form-control"
            id="todo"
            onChange={handleChange}
            value={todo}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Thêm
        </button>
      </form>
    </>
  );
}
