import { useState } from "react";
import ListIcon from "@mui/icons-material/List";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";

const colors = [
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#F44336",
  "#9C27B0",
  "#3F51B5",
  "#00BCD4",
  "#8BC34A",
  "#FFC107",
  "#795548",
  "#607D8B",
  "#E91E63",
];

const iconMap = {
  list: <ListIcon />,
  work: <WorkIcon />,
  school: <SchoolIcon />,
  favorite: <FavoriteIcon />,
  star: <StarIcon />,
};

function AddListPage({ addList }) {
  const [name, setName] = useState("");
  const [selectedColor, setSelectedColor] = useState("#2196F3");
  const [selectedIcon, setSelectedIcon] = useState("list");

  return (
    <div style={{ padding: "40px" }}>
      <h2>Add New List</h2>

      <div
        style={{
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          background: selectedColor,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        {iconMap[selectedIcon]}
      </div>

      <input
        type="text"
        placeholder="List Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ padding: "10px", width: "300px" }}
      />

      <br />
      <br />

      <div>
        <p>Choose Color</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {colors.map((color) => (
            <div
              key={color}
              onClick={() => setSelectedColor(color)}
              style={{
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                background: color,
                cursor: "pointer",
                border: selectedColor === color ? "3px solid black" : "none",
              }}
            />
          ))}
        </div>
      </div>

      <br />
      <br />

      <div style={{ marginTop: "20px" }}>
        <p>Choose Icon</p>

        <div style={{ display: "flex", gap: "10px" }}>
          {Object.keys(iconMap).map((key) => (
            <div
              key={key}
              onClick={() => setSelectedIcon(key)}
              style={{
                padding: "10px",
                cursor: "pointer",
                border:
                  selectedIcon === key ? "2px solid black" : "1px solid gray",
                borderRadius: "10px",
              }}
            >
              {iconMap[key]}
            </div>
          ))}
        </div>
      </div>

      <br />
      <br />

      <button onClick={() => addList(name, selectedColor, selectedIcon)}>
        Done
      </button>
    </div>
  );
}

export default AddListPage;
