import {
  Box,
  CssBaseline,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { NavLink } from "react-router-dom";

const drawerWidth = 240;

var links = [
  {
    id: 1,
    path: "",
    text: "Home page",
  },
  {
    id: 2,
    path: "/todoList",
    text: "Todo list",
  },
];

export const NavBar = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <List>
          {links.map((todo) => (
            <NavLink key={todo.text} to={todo.path}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary={todo.text} />
                </ListItemButton>
              </ListItem>
            </NavLink>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};
