import { calorieTracker } from "../App.jsx";
import { useContext } from "react";

function CalorieInit(){
    const {calories, setCalories, protein, setProtein, setClick} = useContext(calorieTracker);

    function checkValues(e){
        e.preventDefault();

        if(calories < 1000 || protein < 40){
            return;
        }

        setClick(true);
    }

    return (
    <form className="calorieInit">
        <h1>What are your daily targets?</h1>
        <p>Tell us how many calories and how much protein you want to eat each day.</p>
        <div className="calorieTrackerInitCards">
            <div className="calorieTrackerInitCard">
                <p>Daily calories</p>
                <div className="calorieInitInputField">
                    <input type="number" min="1000" required onChange={(e) => setCalories(e.target.value)}/>
                    <p>kcal / day</p>
                </div>
            </div>
            <div className="calorieTrackerInitCard">
                <p>Daily protein</p>
                <div className="calorieInitInputField">
                    <input type="number" min="40" required onChange={(e) => setProtein(e.target.value)}/>
                    <p>g / day</p>
                </div>
            </div>
        </div>
        <button type="submit" onClick={(e) => checkValues(e)}>Save goals and start tracking</button>
    </form>
    );
}

export default CalorieInit;