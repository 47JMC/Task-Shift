"use client";

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

type Task = {
  id: string;
  name: string;
  labels: string[];
  completed: boolean;
};

function TasksInput() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (input.trim() === "") return; // avoid empty tasks

    const newTask = {
      id: uuidv4(),
      name: input,
      labels: [],
      completed: false,
    };
    const updatedTasks = [...tasks, newTask];

    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));

    setInput(""); // clear input field after submission
  };

  return (
    <form onSubmit={handleSubmit} className="text-center my-3">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="p-1 rounded-lg m-1 dark:text-white dark:bg-black dark:border-white border-black border-2 bg-white text-black focus:border-sky-600 transition-colors"
      />
      <button
        type="submit"
        className="p-1 m-1 rounded-lg border-2 border-black bg-white dark:border-white dark:bg-black hover:border-sky-600 transition-colors"
      >
        Add Task
      </button>
    </form>
  );
}

export default TasksInput;
