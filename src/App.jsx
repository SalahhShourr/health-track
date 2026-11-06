import NavBar from "./components/NavBar.jsx";
import CalorieTracker from "./pages/CalorieTracker.jsx";
import BMI from "./pages/BMI.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Fitness from "./pages/Fitness.jsx";
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar />

      <Routes>
        <Route path="/" element={<CalorieTracker />} />
        <Route path="/bmi" element={<BMI />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/fitness" element={<Fitness />} />
      </Routes>
    </div>
  );
}

export default App;