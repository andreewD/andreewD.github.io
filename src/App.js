import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Home from "./components/Home/home";
import About from "./components/About/about";
import Resume from "./components/Resume/resume";
import Contact from "./components/Contact/contact";


function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}></Route>
        <Route path="/resume" element={<Resume />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
       
      </Routes>
    </HashRouter>
  );
}

export default App;
