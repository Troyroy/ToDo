import { ListItem } from "@mui/material";
import { Task } from "../contexts/TaskContext";
import { Dispatch, SetStateAction } from "react";
import { StyledButton, StyledListItemText } from "../styles/styles";

interface EditedTaskListItemProps {
  task: Task;
  setCurrentlyEdited: Dispatch<SetStateAction<string | undefined>>;
  setNewName: Dispatch<React.SetStateAction<string>>;
  removeItem: (id: string) => void;
}

export const EditedTaskListItem = ({
  task,
  setCurrentlyEdited,
  setNewName,
  removeItem,
}: EditedTaskListItemProps) => {
  return (
    <ListItem key={task.id} disablePadding>
      <StyledListItemText
        primary="Name: "
        primaryTypographyProps={{ fontSize: "30px" }}
      />
      <StyledListItemText
        primary={task.name}
        primaryTypographyProps={{ fontSize: "30px" }}
      />

      <StyledButton
        onClick={() => {
          setCurrentlyEdited(task.id);
          setNewName(task.name);
        }}
      >
        Edit{" "}
      </StyledButton>
      <StyledButton
        onClick={() => {
          removeItem(task.id);
        }}
      >
        Delete
      </StyledButton>
    </ListItem>
  );
};
