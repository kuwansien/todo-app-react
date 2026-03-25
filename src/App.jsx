import { useState } from "react";
import Sidebar from "./components/Sidebar";
import AddListPage from "./pages/AddListPage";
import TodoPage from "./pages/TodoPage";
import AddTodoPage from "./pages/AddTodoPage";

function App() {
  const [lists, setLists] = useState([]);
  const [todos, setTodos] = useState([]);
  const [selectedList, setSelectedList] = useState(null);
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

  const toggleTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo,
    );

    setTodos(updatedTodos);
  };

  const addTodo = (title, description, date, isFlagged) => {
    const newTodo = {
      id: Date.now(),
      listId: selectedList.id,
      title,
      description,
      date,
      isCompleted: false,
      isFlagged,
    };

    setTodos([...todos, newTodo]);
    setCurrentPage("todo");
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar
        setCurrentPage={setCurrentPage}
        lists={lists}
        setSelectedList={setSelectedList}
      />

      <div style={{ flex: 1 }}>
        {currentPage === "add-list" && <AddListPage addList={addList} />}

        {currentPage === "todo" && selectedList && (
          <TodoPage
            selectedList={selectedList}
            todos={todos}
            setCurrentPage={setCurrentPage}
            toggleTodo={toggleTodo}
          />
        )}

        {currentPage === "add-todo" && (
          <AddTodoPage selectedList={selectedList} addTodo={addTodo} />
        )}
      </div>
    </div>
  );
}

export default App;
