import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

       
        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then(response => response.json())
        .then(data => {
            alert('Message sent successfully!');
            // Optionally reset the form here
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Failed to send message.');
        });
    };

    return (
        <div className="contact-us">
            <h2>Contact Us</h2>
            <div className="social-icons">

                <a href="https://www.linkedin.com/company/ieee-igdtuw" target="_blank" rel="noopener noreferrer" className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="gray" viewBox="0 0 24 24">
                        <path d="M21.447 0H2.553A2.553 2.553 0 0 0 0 2.553v18.894A2.553 2.553 0 0 0 2.553 24h18.894A2.553 2.553 0 0 0 24 21.447V2.553A2.553 2.553 0 0 0 21.447 0zm-13.45 21.682h-3.15v-10.3h3.15v10.3zm-1.575-11.725a1.824 1.824 0 1 1 0-3.648 1.824 1.824 0 0 1 0 3.648zm13.723 11.725h-3.15v-5.33c0-1.267-.022-2.907-1.77-2.907-1.77 0-2.043 1.388-2.043 2.828v5.409h-3.15v-10.3h3.15v1.4h.045a3.5 3.5 0 0 1 3.151-1.7c3.36 0 3.973 2.213 3.973 5.082v5.518z"/>
                    </svg>
                </a>

                <a href="https://www.instagram.com/ieeeigdtuw/" target="_blank" rel="noopener noreferrer" className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="gray" viewBox="0 0 24 24">
                        <path d="M12 2.2c3.1 0 3.5 0 4.7.1 1.2 0 2.1.3 2.7.7.7.6 1.2 1.5 1.7 2.7.4 1.2.5 2.3.5 4.7s0 3.5-.1 4.7c-.1 1.2-.4 2.1-.7 2.7-.6.7-1.5 1.2-2.7 1.7-.9.4-1.8.5-4.7.5s-3.5 0-4.7-.1c-1.2 0-2.1-.3-2.7-.7-.7-.6-1.2-1.5-1.7-2.7-.4-1.2-.5-2.3-.5-4.7s0-3.5.1-4.7c.1-1.2.4-2.1.7-2.7.6-.7 1.5-1.2 2.7-1.7.9-.4 1.8-.5 4.7-.5zm0-2.2c-3.2 0-3.6 0-4.9.1-1.3 0-2.4.3-3.3.7-1.1.5-2.1 1.3-2.8 2.4-.6 1.2-1 2.5-1.2 4.8-.2 2.3-.2 2.7-.2 4.9 0 3.2 0 3.6.1 4.9.2 1.3.6 2.4 1.2 3.2.6 1.1 1.5 1.9 2.6 2.4 1.1.5 2.2.7 3.3.7 1.3.1 1.7.1 4.9.1s3.6 0 4.9-.1c1.3 0 2.4-.3 3.3-.7 1.1-.5 2.1-1.3 2.8-2.4.6-1.2 1-2.5 1.2-4.8.2-2.3.2-2.7.2-4.9 0-3.2 0-3.6-.1-4.9-.2-1.3-.6-2.4-1.2-3.2-.6-1.1-1.5-1.9-2.6-2.4-1.1-.5-2.2-.7-3.3-.7-1.3-.1-1.7-.1-4.9-.1zm0 5.8a6.2 6.2 0 1 0 0 12.4 6.2 6.2 0 0 0 0-12.4zm0 10.5a4.3 4.3 0 1 1 0-8.6 4.3 4.3 0 0 1 0 8.6zm6.4-10.5a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8z"/>
                    </svg>
                </a>

                <a href="https://x.com/ieeeigdtuw" target="_blank" rel="noopener noreferrer" className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="gray" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10.017 10.017 0 0 1-2.825.775A4.925 4.925 0 0 0 23.337 3c-.946.56-1.992.966-3.12 1.184A4.925 4.925 0 0 0 16.617 2c-2.724 0-4.935 2.208-4.935 4.925 0 .39.043.765.127 1.124C7.691 8.09 4.067 6.13 1.64 3.161c-.426.734-.666 1.58-.666 2.486 0 1.717.873 3.226 2.192 4.116-.807-.026-1.565-.247-2.228-.617v.063c0 2.393 1.693 4.38 3.946 4.84a4.934 4.934 0 0 1-2.228.085c.626 1.953 2.445 3.37 4.59 3.42A9.87 9.87 0 0 1 0 19.542a13.943 13.943 0 0 0 7.557 2.211c9.055 0 14.008-7.496 14.008-13.986 0-.213 0-.425-.015-.637A10.027 10.027 0 0 0 24 4.59c-.883.392-1.83.655-2.846.775a4.932 4.932 0 0 0 2.163-2.724z"/>
                    </svg>
                </a>

                </div>
    
          
    {/*contact form*/}
            <form onSubmit={handleSubmit} className="contact-form">
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label>
                    Subject:
                    <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label>
                    Message:
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </label>

                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default ContactUs;
