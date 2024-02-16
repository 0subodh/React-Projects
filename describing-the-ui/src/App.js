import "./App.css";
import Gallery from "./components/Gallery";
import TodoList from "./components/ToDoList";
import Profile from "./components/Profile";
import MultipleProps from "./components/MultipleProps";
import RenderedList from "./renderingLists/RenderedList";

function App() {
  return (
    <div>
      <Gallery />
      <TodoList />
      <Profile />
      <MultipleProps />
      <RenderedList />
    </div>
  );
}

export default App;
