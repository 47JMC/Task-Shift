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

  // Load tasks from localStorage on component mount
  useEffect(() => {
    const data = localStorage.getItem("tasks");
    if (data) {
      setTasks(JSON.parse(data)); // Parse and load tasks if data exists
    }
  }, []);

  // Function to add a new task and save to localStorage
  const addTask = (newTask: Task) => {
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks)); // Save to localStorage
  };

  return (
    <div className="bg-white border-black border-2 dark:bg-black dark:border-white">
      {tasks.map((task) => (
        <div key={task.id}>
          {task.name}
          <div>{task.completed ? <p>Completed!</p> : <p>Pending</p>}</div>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
