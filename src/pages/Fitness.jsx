import { useState } from "react";
import { Link } from "react-router-dom";

const plans = {
    beginner: [
        { day: "Monday", focus: "Full body", exercises: ["Squats 3x10", "Push-ups 3x8", "Plank 3x20s"] },
        { day: "Tuesday", focus: "Rest", exercises: [] },
        { day: "Wednesday", focus: "Cardio", exercises: ["Brisk walk 30 min", "Jumping jacks 3x20"] },
        { day: "Thursday", focus: "Rest", exercises: [] },
        { day: "Friday", focus: "Full body", exercises: ["Lunges 3x10", "Knee push-ups 3x10", "Glute bridge 3x12"] },
        { day: "Saturday", focus: "Light cardio", exercises: ["Cycling 20 min"] },
        { day: "Sunday", focus: "Rest", exercises: [] },
    ],
    intermediate: [
        { day: "Monday", focus: "Upper body", exercises: ["Push-ups 4x12", "Dumbbell rows 4x10", "Shoulder press 3x10"] },
        { day: "Tuesday", focus: "Lower body", exercises: ["Squats 4x12", "Lunges 3x12", "Calf raises 3x15"] },
        { day: "Wednesday", focus: "Cardio", exercises: ["Run 25 min", "Plank 3x45s"] },
        { day: "Thursday", focus: "Rest", exercises: [] },
        { day: "Friday", focus: "Full body", exercises: ["Deadlifts 3x8", "Pull-ups 3x6", "Burpees 3x10"] },
        { day: "Saturday", focus: "Core", exercises: ["Crunches 3x20", "Leg raises 3x12", "Russian twists 3x20"] },
        { day: "Sunday", focus: "Rest", exercises: [] },
    ],
    professional: [
        { day: "Monday", focus: "Chest & triceps", exercises: ["Bench press 5x5", "Dips 4x10", "Incline press 4x8"] },
        { day: "Tuesday", focus: "Back & biceps", exercises: ["Pull-ups 4x10", "Barbell rows 4x8", "Curls 3x12"] },
        { day: "Wednesday", focus: "Legs", exercises: ["Back squats 5x5", "Romanian deadlifts 4x8", "Leg press 4x10"] },
        { day: "Thursday", focus: "HIIT", exercises: ["Sprints 10x30s", "Box jumps 4x10"] },
        { day: "Friday", focus: "Shoulders", exercises: ["Overhead press 5x5", "Lateral raises 4x12", "Face pulls 3x15"] },
        { day: "Saturday", focus: "Full body", exercises: ["Deadlifts 5x3", "Push press 4x6", "Farmer's carry 4x40m"] },
        { day: "Sunday", focus: "Rest", exercises: [] },
    ],
};

function Fitness() {

    const [level, setLevel] = useState("");
    return (
        <div className="fitness">
            <h1>Get better everyday.</h1>
            <p>Select your fitness level to start working out.</p>
            <div className="fitnessLevels">
                <button className={level === "beginner" ? "active" : ""} onClick={() => setLevel("beginner")}>Beginner</button>
                <button className={level === "intermediate" ? "active" : ""} onClick={() => setLevel("intermediate")}>Intermediate</button>
                <button className={level === "professional" ? "active" : ""} onClick={() => setLevel("professional")}>Professional</button>
            </div>

            {level !== "" &&
                <div className="fitnessCards">
                    {plans[level].map((day) => (
                        <div key={day.day} className="fitnessCard">
                            <h3>{day.day}</h3>
                            <p>{day.focus}</p>
                            {day.exercises.length === 0 ? (
                                <p>Rest day.</p>
                            ) : (
                                <ul>
                                    {day.exercises.map((exercise) => <li key={exercise}>{exercise}</li>)}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>}

        </div>

    );
}

export default Fitness;