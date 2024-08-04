import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./components/Home/Home";
import { Members } from "./components/Members/Members";
import { Projects } from "./components/Projects/Projects";
import { News } from "./components/News/News";
import { ThemeProvider } from "./components/Theme/ThemeContext";
import { Footer } from "./components/Footer/Footer";

function App() {
  // function preventZoom(event) {
  //   if ((event.ctrlKey || event.metaKey) && (event.key === '+' || event.key === '-' || event.key === '0')) {
  //     event.preventDefault();
  //   }
  // }

  // // Function to prevent zooming with mouse wheel
  // function preventWheelZoom(event) {
  //   if (event.ctrlKey || event.metaKey) {
  //     event.preventDefault();
  //   }
  // }

  // // Add event listeners for keydown and wheel events
  // window.addEventListener('keydown', preventZoom);
  // window.addEventListener('wheel', preventWheelZoom, { passive: false });

  // // Disable pinch zoom on touch devices
  // document.addEventListener('touchstart', function(event) {
  //   if (event.touches.length > 1) {
  //     event.preventDefault();
  //   }
  // }, { passive: false });
  return (
    <div className="whole-app">
      <ThemeProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/members" element={<Members />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/news" element={<News />} />
        </Routes>
        <Footer/>
      </ThemeProvider>
    </div>
  );
}

export default App;
