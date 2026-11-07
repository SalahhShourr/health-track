import CalorieInit from "../components/CalorieInit.jsx";
import { calorieTracker } from "../App.jsx";
import { useContext } from "react";

function CalorieTracker() {
    const {calories, protein, click, setClick, proteinConsumed, setProteinConsumed, caloriesConsumed, setCaloriesConsumed} = useContext(calorieTracker);

	return (
        <div>
            {click ? 
            <div className="calorieTracker">
                <h1>Today</h1>
                <div className="calorieTrackerEyebrow">
                    <p>Goal: {calories} kcal / {protein}g protein</p>
                    <button onClick={() => setClick(false)}>Edit goals</button>
                </div>
                <div className="calorieTrackerTrackCards">
                    <div className="calorieTrackerTrackCard">
                        <p className="calorieTrackerInitCardTitle">Calories</p>
                        <p><span>{caloriesConsumed}</span> /{calories} kcal</p>
                        <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"><div className="progress-bar" style={{width: `${caloriesConsumed / 100 * calories}%`}}></div></div>
                        <p>{calories - caloriesConsumed} kcal left</p>
                    </div>
                    <div className="calorieTrackerTrackCard">
                        <p className="calorieTrackerInitCardTitle">Protein</p>
                        <p><span>{proteinConsumed}</span> /{protein} g</p>
                        <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"><div className="progress-bar" style={{width: `${proteinConsumed / 100 * protein}%`}}></div></div>
                        <p>{protein - proteinConsumed} g left</p>
                    </div>
                </div>
            </div>
            : 
            <CalorieInit />
            }
        </div>
    );
}

export default CalorieTracker;