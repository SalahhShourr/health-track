function CalorieInit(){
    return (
    <div className="calorieInit">
        <h1>What are your daily targets?</h1>
        <p>Tell us how many calories and how much protein you want to eat each day.</p>
        <div className="calorieTrackerInitCards">
            <div className="calorieTrackerInitCard">
                <p>Daily calories</p>
                <div className="calorieInitInputField">
                    <input type="number" />
                    <p>kcal / day</p>
                </div>
            </div>
            <div className="calorieTrackerInitCard">
                <p>Daily protein</p>
                <div className="calorieInitInputField">
                    <input type="number" />
                    <p>g / day</p>
                </div>
            </div>
        </div>
        <button>Save goals and start tracking</button>
    </div>
    );
}

export default CalorieInit;