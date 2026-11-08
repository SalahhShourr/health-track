function Contact() {
	return (
        <div className="contactPage">
            <h1>Contact us</h1>
            <p>Questions, feedback or ideas? Send us a message and we’ll get back to you.</p>
            <form onSubmit={(e) => e.preventDefault()}>
                <div className="inputField">
                    <label>Name</label>
                    <input />
                </div>
                <div className="inputField">
                    <label>Email</label>
                    <input />
                </div>
                <div className="inputField">
                    <label>Message</label>
                    <textarea></textarea>
                </div>
                <button type="submit">Send message</button>
            </form>
        </div>
    );
}

export default Contact;