import React, { useState } from 'react';
import './Contact.css';
import axios from 'axios'

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

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log('yo')
        console.log(formData)
        // Add your submission logic here
        try{
        await axios.post('https://formsubmit.co/indiagsons@gmail.com',formData)
        alert("form submited successfully")
        // You can send the form data to your backend or perform any action as needed
        }
        catch(err){
            console.log(err)
        }
    };

    return (
        <div className='contact'>
            <h1>Contact us</h1>
            <div className="contact-form-container">
                <form className="contact-form">
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
                    <button type="submit" onClick={handleSubmit} >Submit</button>
                </form>
            </div>
        </div>

    );
};

export default Contact;
