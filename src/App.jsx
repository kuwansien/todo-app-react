import { useState } from "react";
import Sidebar from "./components/Sidebar";
import AddListPage from "./pages/AddListPage";

function App() {
  const [lists, setLists] = useState([]);
  const [currentPage, setCurrentPage] = useState("home");

const addList = (name, color, icon) => {
  const newList = {
    id: Date.now(),
    name,
    color,
    icon,
  };

  setLists([...lists, newList]);
  setCurrentPage("home");
};

  return (
    <div style={{ display: "flex" }}>
      <Sidebar
        setCurrentPage={setCurrentPage}
        lists={lists}
      />

      <div style={{ flex: 1 }}>
        {currentPage === "add-list" && (
          <AddListPage addList={addList} />
        )}
      </div>
    </div>
  );
}

export default App;