import React from "react";
import Footer from "./components/Footer";
import AddTodo from "./components/AddTodo";
import VisibleTodoList from "./components/VisibleTodoList";

import "./App.css";

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default App;
