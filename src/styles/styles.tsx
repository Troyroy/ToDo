import { Button, ListItemText, styled, TextField } from "@mui/material";

export const StyledButton = styled(Button)(() => ({
  "&:hover": {
    cursor: "pointer",
  },

  borderStyle: "solid",
  borderRadius: "20%",
  borderWidth: "2px ",
  borderColor: "#33ccff",
  fontStyle: "Arial",
  fontSize: "30px",
  textAlign: "center",
  margin: "10px",
}));

export const StyledTextField = styled(TextField)(() => ({
  fontStyle: "Arial",
  fontSize: "0px",
  margin: "10px",
}));

export const StyledListItemText = styled(ListItemText)(() => ({
  fontStyle: "Arial",
  fontSize: "30px",
  margin: "10px",
}));
