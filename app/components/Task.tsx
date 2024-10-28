"use client";

import { useEffect, useState } from "react";

type Task = {
  id: string;
  name: string;
  labels: string[];
  completed: boolean;
};

function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleDelete = (id: string) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  // Load tasks from localStorage on component mount
  useEffect(() => {
    const data = localStorage.getItem("tasks");
    if (data) {
      setTasks(JSON.parse(data)); // Parse and load tasks if data exists
    }
  }, [localStorage.getItem("tasks")]);

  return (
    <ul className="bg-white border-black border-2 dark:bg-black dark:border-white *:transition-colors m-1 rounded-lg">
      {tasks.map((task) => (
        <li className="flex justify-between items-center m-1" key={task.id}>
          {task.name}
          <div
            className={`${
              task.completed ? "bg-green-600" : "bg-orange-700"
            } p-1 rounded-lg`}
          >
            {task.completed ? <p>Completed!</p> : <p>Pending</p>}
          </div>
          <button
            className="p-1 bg-red-500 hover:bg-red-600 rounded-md transition-colors"
            onClick={() => handleDelete(task.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
