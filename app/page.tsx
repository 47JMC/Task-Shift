import TasksInput from "./components/TasksInput";
import TaskList from "./components/Task";

function page() {
  return (
    <>
      <h1 className="font-bold text-center text-2xl m-1">TaskShift</h1>
      <TasksInput />
      <TaskList />
    </>
  );
}

export default page;
