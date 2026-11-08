function About() {
	return (
        <div className="aboutPage">
            <div className="aboutEyebrow">
                <h1>About HealthTrack</h1>
                <p>HealthTrack is a simple place to keep track of your health, log what you eat, and see what you're doing.</p>
            </div>
            <div className="aboutCards">
                <div className="aboutCard">
                    <h2>Calorie Tracker</h2>
                    <p>Set your daily calorie and protein goals, then log your meals and watch your progress.</p>
                </div>
                <div className="aboutCard">
                    <h2>Fitness</h2>
                    <p>Keep your training and fitness activity in one place.</p>
                </div>
                <div className="aboutCard">
                    <h2>BMI Calculator</h2>
                    <p>Enter your height and weight to get your BMI in seconds.</p>
                </div>
                <div className="aboutCard">
                    <h2>Our goal</h2>
                    <p>Make healthy habits easy to start and easy to keep. Everything here is built to be quick to use and easy to read.</p>
                </div>
            </div>
        </div>
    );
}

export default About;