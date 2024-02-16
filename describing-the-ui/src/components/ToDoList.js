import "./ToDoList.css";

const person = {
  name: "Hedy Lamar",
  theme: {
    backgroundColor: "black",
    color: "pink",
  },
};

export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s ToDo List</h1>
      <img
        src="https://i.imgur.com/yXOvdOSs.jpg"
        alt={person.name}
        className="photo"
      />
      <ul>
        <li>Invent new traffic lights</li>
        <li>Rehearse a movie scene</li>
        <li>Improve spectrum technology</li>
      </ul>
    </div>
  );
}
