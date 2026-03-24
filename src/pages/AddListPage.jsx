import { useState } from "react";

function AddListPage({ addList }) {
  const [name, setName] = useState("");

  return (
    <div style={{ padding: "40px" }}>
      <h2>Add New List</h2>

      <input
        type="text"
        placeholder="List Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ padding: "10px", width: "300px" }}
      />

      <br /><br />

      <button onClick={() => addList(name)}>
        Done
      </button>
    </div>
  );
}

export default AddListPage;