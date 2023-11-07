import { useState } from "react";
import Task from "./Task";

export default function List() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Create functionality in the system",
      category: "Work",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Go to the gym",
      category: "Personal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Study React",
      category: "Studies",
      isCompleted: false,
    },
  ]);

  return (
    <>
      <div className="flex flex-col gap-6">
        {tasks.map((task) => (
          // a prop task vai ter o valor do objeto task
          <Task task={task} />
        ))}
      </div>
    </>
  );
}
