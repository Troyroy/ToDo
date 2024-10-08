import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "./App.css";

import { NavBar } from "./components/NavBar";
import { HomePage } from "./pages/HomePage";
import { TodoPage } from "./pages/TodoPage";

export const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/todoList" element={<TodoPage />} />
        </Routes>
      </Router>
    </>
  );
};
