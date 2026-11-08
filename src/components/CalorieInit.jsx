import { calorieTracker } from "../App.jsx";
import { useContext } from "react";
import { useState } from "react";

function CalorieInit(){
    const {calories, setCalories, protein, setProtein, setClick} = useContext(calorieTracker);
    const [calorieError, setCalorieError] = useState("");
    const [proteinError, setProteinError] = useState("");

    function checkValues(e){
        e.preventDefault();

        if(calories < 1000 || protein < 40){
            if(calories < 1000){
                setCalorieError("Please set valid calories (calories cannot be lower than 1000)");
            }
            if(protein < 40){
                setProteinError("Please set valid protein (protein cannot be lower than 40)");
            }
            return;
        }
        
        setCalorieError("");
        setProteinError("");
        setClick(true);
    }

    return (
    <form className="calorieInit" onSubmit={(e) => checkValues(e)}>
        <h1>What are your daily targets?</h1>
        <p>Tell us how many calories and how much protein you want to eat each day.</p>
        <div className="calorieTrackerInitCards">
            <div className="calorieTrackerInitCard">
                <p>Daily calories</p>
                <div className="calorieInitInputField">
                    <input type="number" required onChange={(e) => setCalories(e.target.value)}/>
                    <p>kcal / day</p>
                </div>
                <p className="error">{calorieError}</p>
            </div>
            <div className="calorieTrackerInitCard">
                <p>Daily protein</p>
                <div className="calorieInitInputField">
                    <input type="number" required onChange={(e) => setProtein(e.target.value)}/>
                    <p>g / day</p>
                </div>
                <p className="error">{proteinError}</p>
            </div>
        </div>
        <button type="submit">Save goals and start tracking</button>
    </form>
    );
}

export default CalorieInit;