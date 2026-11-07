import NavBar from "./components/NavBar.jsx";
import CalorieTracker from "./pages/CalorieTracker.jsx";
import BMI from "./pages/BMI.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Fitness from "./pages/Fitness.jsx";
import {Routes, Route} from "react-router-dom";
import { createContext } from "react";
import { useState } from "react";

export const calorieTracker = createContext();

function App() {
  const [calories, setCalories] = useState(0);
  const [protein, setProtein] = useState(0);
  const [click, setClick] = useState(false);
  const [caloriesConsumed, setCaloriesConsumed] = useState(0);
  const [proteinConsumed, setProteinConsumed] = useState(0);
  const [foods, setFoods] = useState([]);

  return (
    <calorieTracker.Provider value={{calories, setCalories, protein, setProtein, click, setClick, caloriesConsumed, setCaloriesConsumed, proteinConsumed, setProteinConsumed, foods, setFoods}}>
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
    </calorieTracker.Provider>
    
  );
}

export default App;