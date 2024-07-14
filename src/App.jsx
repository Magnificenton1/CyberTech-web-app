import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./components/Home/Home";
import { Members } from "./components/Members/Members";
import { Projects } from "./components/Projects/Projects";
import { News } from "./components/News/News";

function App() {
  return (
    <div className="whole-app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/members" element={<Members />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/news" element={<News/>}/>
      </Routes>
    </div>
  );
}

export default App;
