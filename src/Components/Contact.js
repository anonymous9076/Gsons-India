import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your submission logic here
        console.log(formData);
        // You can send the form data to your backend or perform any action as needed
    };

    return (
        <div className='contact'>
            <h1>Contact us</h1>
            <div className="contact-form-container">
                <form onSubmit={handleSubmit} className="contact-form">
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        required
                    />
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your Message"
                        required
                    ></textarea>
                    <button type="submit">Submit</button>
                </form>
                <div className='contact-right'>
                    <img src='./Images/marble-4062830_1920.jpg' alt='...'></img>
                </div>
            </div>
        </div>

    );
};

export default Contact;
