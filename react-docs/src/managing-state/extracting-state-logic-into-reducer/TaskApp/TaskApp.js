import AddTask from "./AddTask.js";
import TaskList from "./TaskList.js";
import "./styles.css";

import { useReducer } from "react";

/* Migrating from useState to useReducer 
1. move from setting state to dispatching actions
2. write a reducer function
3. use the reducer from your component
*/

// reducer is a function to change all the state logic used in application
function taskReducer(tasks, action) {
  switch (action.type) {
    case "add":
      return [
        ...tasks,
        {
          id: nextId++,
          text: action.text,
          done: false,
        },
      ];
    case "change":
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });

    case "delete":
      return tasks.filter((t) => t.id !== action.id);

    default:
      throw new Error("Unknown Action Type!");
  }
}

export default function TaskApp() {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

  return (
    <>
      <h1>Prague itinerary</h1>
      <AddTask
        onAddTask={(text) =>
          dispatch({ type: "add", id: nextId++, text: text })
        }
      />
      <TaskList
        tasks={tasks}
        onChangeTask={(task) => dispatch({ type: "change", task: task })}
        onDeleteTask={(taskId) => dispatch({ type: "delete", id: taskId })}
      />
    </>
  );
}

let nextId = 3;
const initialTasks = [
  { id: 0, text: "Visit Kafka Museum", done: true },
  { id: 1, text: "Watch a puppet show", done: false },
  { id: 2, text: "Lennon Wall pic", done: false },
];
