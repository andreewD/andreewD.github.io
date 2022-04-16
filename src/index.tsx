import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "antd/dist/antd.min.css";
import App from "./App";
import { Courses } from "./views";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path=":dayName" element={<Courses />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

{
  /* <App /> */
}
