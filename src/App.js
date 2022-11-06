import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import Users from "./components/Pages/Users/Users";
import Layout from "./components/Layout/Layout";
import Home from "./components/Pages/Home/Home";

import React from "react";
import UserFile from "./components/Pages/UserFile/UserFile";
import FileViewer from "./components/Pages/FileViewer/FileViewer";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="users" element={<Users />} />
          <Route path="UserFile">
            <Route path=":userId" element={<UserFile />} />
          </Route>
          <Route path="fileViewer">
            <Route path=":fileName" element={<FileViewer />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
