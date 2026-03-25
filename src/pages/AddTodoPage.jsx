import { useState } from "react";

function AddTodoPage({ selectedList, addTodo }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [isFlagged, setIsFlagged] = useState(false);

  return (
    <div style={{ padding: "40px" }}>
      <h2>Add Todo - {selectedList.name}</h2>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br />
      <br />

      <textarea
        placeholder="Details"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <br />
      <br />

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <br />
      <br />

      <label>
        <input
          type="checkbox"
          checked={isFlagged}
          onChange={() => setIsFlagged(!isFlagged)}
        />
        Important
      </label>

      <br />
      <br />

      <button onClick={() => addTodo(title, description, date, isFlagged)}>
        Done
      </button>
    </div>
  );
}

export default AddTodoPage;
