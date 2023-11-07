import { useState } from "react";
import Button from "./Button";

export default function List() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Create functionality in the system",
      category: "work",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Go to the gym",
      category: "personal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Study React",
      category: "studies",
      isCompleted: false,
    },
  ]);

  return (
    <>
      <div className="flex flex-col gap-6">
        {todos.map((todo) => (
          <div className="flex justify-between items-start gap-5 sm:gap-10">
            <div className="">
              <p>{todo.text}</p>
              <p className="">#{todo.category}</p>
            </div>
            <div className="flex justify-center items-center gap-2">
              <Button
                type="default"
                color="purple"
                title={<a href="#">Complete</a>}
              />
              <Button type="default" color="gray" title={<a href="#">X</a>} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
