import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage";
import AllBlogs from "./components/Allblogs";
import CreateBlogs from "./components/CreateBlogs";
import EntityPage from "./components/EntityPage";
import EditPage from "./components/EditPage";
import DeletePage from "./components/DeletePage";
import DeletedBlogs from "./components/DeletedBlogs";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/blogs" element={<AllBlogs />} />
        <Route path="/blogs/create" element={<CreateBlogs />} />
        <Route path="/blogs/:id" element={<EntityPage />} />
        <Route path="/blogs/:id/edit" element={<EditPage />} />
        <Route path="/blogs/:id/delete" element={<DeletePage />} />
        <Route path="/blogs/trash" element={<DeletedBlogs />} />
      </Routes>
    </div>
  );
}

export default App;
