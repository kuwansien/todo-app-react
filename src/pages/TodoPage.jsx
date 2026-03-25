import React from "react";
import FlagIcon from "@mui/icons-material/Flag";

function TodoPage({ selectedList, todos, setCurrentPage, toggleTodo }) {
  const filteredTodos = todos.filter((todo) => todo.listId === selectedList.id);

  return (
    <div style={{ padding: "40px" }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h2>{selectedList.name}</h2>

        <button onClick={() => setCurrentPage("add-todo")}>+ Add Todo</button>
      </div>

      <hr />

      {/* Todo List */}
      {filteredTodos.length === 0 ? (
        <p>No todos yet...</p>
      ) : (
        filteredTodos.map((todo) => (
          <div
            key={todo.id}
            style={{
              marginBottom: "15px",
              padding: "12px",
              borderRadius: "10px",
              background: "#f9f9f9",
              boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
            }}
          >
            <p style={{ fontSize: "12px", color: "#888" }}>{todo.date}</p>

            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              {/* ✅ Checkbox */}
              <input
                type="checkbox"
                checked={todo.isCompleted}
                onChange={() => toggleTodo(todo.id)}
              />

              {/* ✅ Title */}
              <div>
                <p
                  style={{
                    fontWeight: "bold",
                    textDecoration: todo.isCompleted ? "line-through" : "none",
                    color: todo.isCompleted ? "gray" : "black",
                    margin: 0,
                  }}
                >
                  {todo.title}
                </p>

                <p
                  style={{
                    textDecoration: todo.isCompleted ? "line-through" : "none",
                    color: todo.isCompleted ? "#999" : "#555",
                  }}
                >
                  {todo.description}
                </p>

                {todo.isFlagged && (
                  <FlagIcon style={{ color: "red", fontSize: "18px" }} />
                )}
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default TodoPage;
