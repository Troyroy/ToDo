import { Task, useTaskContext } from "../contexts/TaskContext";
import { useState } from "react";
import { TaskList } from "../components/TaskList";
import { StyledButton, StyledTextField } from "../styles/styles";

export const TodoPage = () => {
  const { tasks, setTasks } = useTaskContext();
  const [currentlyEdited, setCurrentlyEdited] = useState<string | undefined>();
  const [name, setName] = useState("");
  const [newName, setNewName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const addItem = (x: string) => {
    if (tasks.filter((task) => task.name !== x).length == tasks.length) {
      const id1 = "id" + Math.random().toString(16).slice(2);
      setTasks([...tasks, { id: id1, name: x, isDone: false }]);
      setName("");
      setErrorMessage("");
    } else {
      setErrorMessage("Same name not allowed");
    }
  };

  const removeItem = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editItem = (x: Task) => {
    const [newTask] = tasks.filter((task) => task.id === x.id);
    newTask.name = newName;
    const oldTasks = tasks.filter((task) => task.id !== x.id);
    setTasks([...oldTasks, newTask]);
    setCurrentlyEdited(undefined);
  };

  return (
    <div>
      <h1>Todo page</h1>

      <TaskList
        tasks={tasks}
        newName={newName}
        currentlyEdited={currentlyEdited}
        editItem={editItem}
        setCurrentlyEdited={setCurrentlyEdited}
        setNewName={setNewName}
        removeItem={removeItem}
      ></TaskList>

      <StyledTextField
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        inputProps={{ style: { fontSize: 20 } }}
        placeholder="Enter new todo"
      />
      <br></br>
      <StyledButton
        onClick={() => {
          addItem(name);
        }}
      >
        Add new todo
      </StyledButton>
      {errorMessage && <div className="error"> {errorMessage} </div>}
    </div>
  );
};
