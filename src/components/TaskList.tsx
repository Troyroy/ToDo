import { List } from "@mui/material";
import { EditedTaskListItem } from "./EditedTaskListItem";
import { StaticTaskListItem } from "./StaticTaskListItem";
import { Task } from "../contexts/TaskContext";
import { Dispatch, SetStateAction } from "react";

interface TaskListProps {
  tasks: Task[];
  newName: string;
  currentlyEdited: string | undefined;
  editItem: (x: Task) => void;
  setCurrentlyEdited: Dispatch<SetStateAction<string | undefined>>;
  setNewName: Dispatch<React.SetStateAction<string>>;
  removeItem: (id: string) => void;
}

export const TaskList = ({
  tasks,
  newName,
  currentlyEdited,
  setCurrentlyEdited,
  editItem,
  setNewName,
  removeItem,
}: TaskListProps) => {
  return (
    <List>
      {" "}
      {tasks.map((task) =>
        currentlyEdited !== task.id ? (
          <EditedTaskListItem
            task={task}
            setCurrentlyEdited={setCurrentlyEdited}
            setNewName={setNewName}
            removeItem={removeItem}
          />
        ) : (
          <StaticTaskListItem
            task={task}
            newName={newName}
            setCurrentlyEdited={setCurrentlyEdited}
            setNewName={setNewName}
            editItem={editItem}
            removeItem={removeItem}
          />
        )
      )}
    </List>
  );
};
