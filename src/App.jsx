import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./components/Home/Home";
import { Members } from "./components/Members/Members";
import { Projects } from "./components/Projects/Projects";
import { ThemeProvider } from "./components/Theme/ThemeContext";
import { Footer } from "./components/Footer/Footer";
import { LinkProvider } from "./components/Navbar/ChosenLinkContext";

function App() {
  
  return (
    <div className="whole-app">
      <ThemeProvider>
        <LinkProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/members" element={<Members/>} />
          <Route path="/projects" element={<Projects/>} />
        </Routes>
        <Footer/>
        </LinkProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
