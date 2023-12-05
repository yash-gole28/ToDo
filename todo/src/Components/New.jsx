import React, { useState } from "react";

const New = () => {
  const [todotext, setTodoText] = useState({ todo: "" });
  const [todo, setTodo] = useState([]);
  const [check, setCheck] = useState(false);
  const [checkedTodos, setCheckedTodos] = useState([]);

  const handleChange = (event) => {
    setTodoText({ ...todotext, [event.target.name]: event.target.value });
  };

  function handleSubmit(event) {
    event.preventDefault();
    setTodo([...todo, { ...todotext, isChecked: false }]);
    setTodoText({ todo: "" });
  }

  function deleteTodo(index) {
    const items = [...todo];
    items.splice(index, 1);
    setTodo(items);
    // Remove the checked status for the deleted item
    const updatedCheckedTodos = [...checkedTodos];
    updatedCheckedTodos.splice(index, 1);
    setCheckedTodos(updatedCheckedTodos);
  }

  const handleCheck = check ? "active-check" : "inactive-check";

  const toggleCheck = (index) => {
    const updatedCheckedTodos = [...checkedTodos];
    updatedCheckedTodos[index] = !updatedCheckedTodos[index];
    setCheckedTodos(updatedCheckedTodos);
  };

  return (
    <>
      <h1>ToDo</h1>

      <form onSubmit={handleSubmit}>
        <input
          style={{ width: "50%", height: "50px" }}
          type="text"
          name="todo"
          value={todotext.todo}
          onChange={handleChange}
        />
        <input type="submit" value="add " />
      </form>

      <section>
        {todo?.length ? (
          <div>
            {todo.map((item, index) => (
              <div style={{ display: "flex" }} key={index}>
                <div style={{ width: "50px" }}>{index + 1}</div>
                <div style={{ border: "1px solid red", width: "500px" }}>
                  {item.todo}
                </div>
                <input
                  type="checkbox"
                  className={handleCheck}
                  checked={checkedTodos[index] || false}
                  onChange={() => toggleCheck(index)}
                />
                <button className="delete" onClick={() => deleteTodo(index)}>delete</button>
              </div>
            ))}
          </div>
        ) : (
          <div>Add Todo</div>
        )}
      </section>
    </>
  );
};

export default New;
