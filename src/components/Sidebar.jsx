import React from "react";
import ListIcon from "@mui/icons-material/List";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";

const iconMap = {
  list: <ListIcon />,
  work: <WorkIcon />,
  school: <SchoolIcon />,
  favorite: <FavoriteIcon />,
  star: <StarIcon />,
};

function Sidebar({ setCurrentPage, lists }) {
  return (
    <div style={styles.sidebar}>
      <h2>TODO</h2>

      <div style={styles.menuItem}>📅 Scheduled</div>

      <div style={styles.section}>
        <p>My Lists</p>
      </div>

      {lists.map((list) => (
        <div
          key={list.id}
          style={{
            ...styles.menuItem,
            display: "flex",
            gap: "10px",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              background: list.color,
            }}
          />

          {iconMap[list.icon]}

          <span>{list.name}</span>
        </div>
      ))}

      <div style={styles.menuItem} onClick={() => setCurrentPage("add-list")}>
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
