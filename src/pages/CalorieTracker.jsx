import CalorieInit from "../components/CalorieInit.jsx";
import { calorieTracker } from "../App.jsx";
import { useContext } from "react";
import { useState } from "react";

function CalorieTracker() {
    const {calories, protein, click, setClick, proteinConsumed, setProteinConsumed, caloriesConsumed, setCaloriesConsumed} = useContext(calorieTracker);
    const [inputCalorie, setInputCalorie] = useState(0);
    const [inputProtein, setInputProtein] = useState(0);

    function validate(){
        if(inputCalorie <= 0 || inputProtein < 0){
            return;
        }
        
        setProteinConsumed(Number(inputProtein) + proteinConsumed);
        setCaloriesConsumed(Number(inputCalorie) + caloriesConsumed);
        setInputCalorie("");
        setInputProtein("");
    }

    function reset(){
        setCaloriesConsumed(0);
        setProteinConsumed(0);
        setInputCalorie("");
        setInputProtein("");
        setClick(false);
    }

	return (
        <div>
            {click ? 
            <div className="calorieTracker">
                <h1>Today</h1>
                <div className="calorieTrackerEyebrow">
                    <p>Goal: {calories} kcal / {protein}g protein</p>
                    <button onClick={() => reset()}>Edit goals</button>
                </div>
                <div className="calorieTrackerTrackCards">
                    <div className="calorieTrackerTrackCard">
                        <p className="calorieTrackerCardTitle">Calories</p>
                        <p><span>{caloriesConsumed}</span> /{calories} kcal</p>
                        <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"><div className="progress-bar" style={{width: `${caloriesConsumed * 100 / calories}%`}}></div></div>
                        <p>{calories - caloriesConsumed} kcal left</p>
                    </div>
                    <div className="calorieTrackerTrackCard">
                        <p className="calorieTrackerCardTitle">Protein</p>
                        <p><span>{proteinConsumed}</span> /{protein} g</p>
                        <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"><div className="progress-bar" style={{width: `${proteinConsumed * 100 / protein}%`}}></div></div>
                        <p>{protein - proteinConsumed} g left</p>
                    </div>
                </div>
                <div className="calorieTrackerInputCard">
                    <p className="calorieTrackerCardTitle">Add food</p>
                    <div className="calorieTrackerInputFields">
                        <div className="calorieTrackerInputField">
                            <p>Food</p>
                            <input type="text" placeholder="e.g. Chicken rice bowl"/>
                        </div>
                        <div className="calorieTrackerInputField">
                            <p>Calories</p>
                            <input type="number" placeholder="kcal" onChange={(e) => setInputCalorie(e.target.value)} value={inputCalorie}/>
                        </div>
                        <div className="calorieTrackerInputField">
                            <p>Protein</p>
                            <input type="number" placeholder="g" onChange={(e) => setInputProtein(e.target.value)} value={inputProtein}/>
                        </div>
                        <div className="buttonDiv">
                            <p>ㅤ</p>
                            <button onClick={() => validate()}>Add</button>
                        </div>
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