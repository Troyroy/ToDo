import { ListItem } from "@mui/material";
import { Task } from "../contexts/TaskContext";
import { Dispatch, SetStateAction } from "react";
import {
  StyledButton,
  StyledListItemText,
  StyledTextField,
} from "../styles/styles";

interface StaticTaskListItemProps {
  task: Task;
  newName: string;
  setCurrentlyEdited: Dispatch<SetStateAction<string | undefined>>;
  setNewName: Dispatch<React.SetStateAction<string>>;
  editItem: (x: Task) => void;
  removeItem: (id: string) => void;
}

export const StaticTaskListItem = ({
  task,
  newName,
  setNewName,
  editItem,
  removeItem,
}: StaticTaskListItemProps) => {
  return (
    <ListItem key={task.id} disablePadding>
      <StyledListItemText
        primary="Name: "
        primaryTypographyProps={{ fontSize: "30px" }}
      />

      <StyledTextField
        value={newName}
        onChange={(e) => {
          setNewName(e.target.value);
        }}
        inputProps={{ style: { fontSize: 40 } }}
      />
      <StyledButton
        onClick={() => {
          editItem(task);
        }}
      >
        Save
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
