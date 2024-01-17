import React from "react";
import { Routes, Route } from "react-router-dom"
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import NotFound from "./components/NotFound";

function App() {
  return (
      <div className="App">
          <Header />
          <div id="Contents">
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="projects/" element={<Projects />} />
                  <Route path="*" element={<NotFound />} />
              </Routes>
          </div>
          <div id="Footer">
              © Copyright 2024 Soohyun Choi | All Rights Reserved
          </div>
    </div>
  );
}

export default App;
