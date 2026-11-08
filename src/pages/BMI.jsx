import { useState } from "react";

function BMI() {
    const [weight, setWeight] = useState("")
    const [height, setHeight] = useState("")
    const [result, setResult] = useState("")
    const [category, setCategory] = useState("")

    function calculate(e) {
        e.preventDefault();

        if (weight <= 0 || height <= 0) {
            return;
        }

        const meters = Number(height) / 100;
        const bmi = Number(weight) / (meters * meters);
        setResult(bmi.toFixed(1));

        if (bmi < 18.5){
            setCategory("Underweight")
        }
        else if (bmi < 25){
            setCategory("Normal")
        }
        else if (bmi < 30){
            setCategory("Overweight")
        }
        else{
            setCategory("Obese")
        }
    }
	return (
       <form className="calorieInit" onSubmit={(e) => calculate(e)}>
        <h1>Calculate your body mass index.</h1>
        <p>Enter your weight and Height.</p>
        <div className="calorieTrackerInitCards">
            <div className="calorieTrackerInitCard">
                <p>Weight</p>
                <div className="calorieInitInputField">
                    <input type="number" value ={weight} onChange = {(e) => setWeight(e.target.value)}/>
                    <p>kg</p>
                </div>
            </div>
            <div className="calorieTrackerInitCard">
                <p>Height</p>
                <div className="calorieInitInputField">
                    <input type="number" value ={height} onChange = {(e) => setHeight(e.target.value)}/>
                    <p>cm</p>
                </div>
            </div>
        </div>
        <button type="submit">Calculate BMI</button>
        {result !== "" && (
            <div className="calorieTrackerInitCard">
                <p>Your BMI: {result}</p>
                <p>{category}</p>
            </div>
        )}
    </form>
    );
}

export default BMI;