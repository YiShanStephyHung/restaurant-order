import React from "react";

function Contact() {
    return (
        <main className="contact-page">
            <h2>Contact Us</h2>
            <div className="contact-container">
                <div className="contact-info">
                    <p><strong>Address:</strong> 123 Main Street, Cityville</p>
                    <p><strong>Phone:</strong> (555) 123-4567</p>
                    <p><strong>Email:</strong> info@littlelemon.com</p>
                </div>

                <form
                    className="contact-form"
                    onSubmit={(e) => {
                        e.preventDefault();
                        alert('Thank you for contacting us!')
                        e.target.reset()
                    }}
                >
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" required />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" required />

                    <label htmlFor="message">Message:</label>
                    <textarea id="message" rows="4" required></textarea>

                    <button type="submit" className="btn-primary">Send</button>
                </form>
            </div>

            <div className="map">
                <iframe title="Restaurant Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2382.0993516539165!2d-6.264115114096622!3d53.34147770083412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670f886b1dd297%3A0xf1b04af0735a4553!2sLittle%20Lemon!5e0!3m2!1szh-TW!2stw!4v1756732311091!5m2!1szh-TW!2stw"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowfullscreen=""
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </main>
    )
}

export default Contact;