import { Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./components/Home/Home";
import { Members } from "./components/Members/Members";
import { Projects } from "./components/Projects/Projects";
import { ThemeProvider } from "./components/Theme/ThemeContext";
import { Footer } from "./components/Footer/Footer";
import { LinkProvider } from "./components/Navbar/ChosenLinkContext";
import { ContactUs } from "./components/ContactUs/ContactUs";
import { ThemeChangingFooter } from "./components/Footer/ThemeChangingFooter";

function App() {
  const location = useLocation();
  return (
    <div className="whole-app">
      <ThemeProvider>
        <LinkProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          {/* <Route path="/members" element={<Members/>} /> */}
          <Route path="/projects" element={<Projects/>} />
          <Route path="/contact-us" element={<ContactUs/>} />
        </Routes>
        {location.pathname === "/contact-us" ? <ThemeChangingFooter /> : <Footer />}
        </LinkProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
