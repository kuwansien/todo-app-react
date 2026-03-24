import React from "react";

function Sidebar({ setCurrentPage, lists }) {
  return (
    <div style={styles.sidebar}>
      <h2>TODO</h2>

      <div style={styles.menuItem}>📅 Scheduled</div>

      <div style={styles.section}>
        <p>My Lists</p>
      </div>

      {lists.map((list) => (
        <div key={list.id} style={styles.menuItem}>
          {list.name}
        </div>
      ))}

      <div
        style={styles.menuItem}
        onClick={() => setCurrentPage("add-list")}
      >
        + Add New List
      </div>
    </div>
  );
}

const styles = {
  sidebar: {
    width: "250px",
    height: "100vh",
    background: "#f5f522",
    padding: "20px",
  },
  menuItem: {
    padding: "10px",
    cursor: "pointer",
  },
  section: {
    marginTop: "20px",
    fontWeight: "bold",
  },
};

export default Sidebar;